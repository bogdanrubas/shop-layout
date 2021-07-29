import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Categories, Category, CategoryContent, Column, DropdownContent, DropdownWrapper, Wrapper } from './styles';

interface LinksProps {
  menuData: any;
}

const Links: React.FunctionComponent<LinksProps> = ({menuData}) => {
  const categoriesRef = useRef([]),
    categoriesContainersRef = useRef([]);

  useEffect(() => {
    categoriesRef.current = categoriesRef.current.slice(0, menuData.length);
    categoriesContainersRef.current = categoriesContainersRef.current.slice(0, menuData.length);
  }, [menuData]);

  const [state, setState] = useState({
    shouldDropdownShow: false,
    quantityOfDropdownContent: undefined,
    dropdownLeftPosition: undefined,
    dropdownTriangleLeftPosition: undefined,
    prevDropdown: undefined,
    actualDropdown: undefined,
    dropdownHeight: undefined,
    dropdownWidth: undefined,
  });

  function handleMouseEnter(i: number) {
    const categoryNode = categoriesRef.current[i],
      categoryContentNode = categoriesContainersRef.current[i];
    let dropdownLeftPosition,
      dropdownTriangleLeftPosition,
      dropdownWidth,
      dropdownHeight;

    if (categoryNode) {
      // @ts-ignore
      dropdownLeftPosition = categoryNode.offsetLeft;
      // @ts-ignore
      dropdownTriangleLeftPosition = categoryNode.offsetWidth / 2;
    }

    // dynamiczne okreslanie szerokosci i wysokosci w zaleznosci od zawartosci
    if (categoryContentNode) {
      // @ts-ignore
      dropdownWidth = categoryContentNode.offsetWidth;
      // @ts-ignore
      dropdownHeight = categoryContentNode.offsetHeight + 40;
    }

    if (i !== undefined) {
      setState({...state,
        shouldDropdownShow: true,
        dropdownLeftPosition,
        prevDropdown: state.actualDropdown,
        // @ts-ignore
        actualDropdown: i,
        // @ts-ignore
        dropdownTriangleLeftPosition,
        dropdownHeight,
        dropdownWidth
      })
    } else {
      setState({...state,
        shouldDropdownShow: true,
      })
    }

  }

  function handleMouseLeave() {
    setState({...state,
      shouldDropdownShow: false,
      prevDropdown: undefined,
      actualDropdown: undefined
    })

    setTimeout(() => {
      if (state.shouldDropdownShow === false) {
        setState({...state,
          dropdownLeftPosition: undefined,
          dropdownTriangleLeftPosition: undefined,
          dropdownHeight: undefined,
          dropdownWidth: undefined,
        })
      }
    }, 400);
  }

  return (
    <Wrapper>
      <Categories onMouseLeave={() => handleMouseLeave()}>
        {menuData.map((category: any, i: number) => (
          <Category
            key={i}
            // @ts-ignore
            ref={el => categoriesRef.current[i] = el}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {category.category}
          </Category>
        ))}

        <DropdownWrapper
          dropdownTriangleLeftPosition={state.dropdownTriangleLeftPosition}
          dropdownLeftPosition={state.dropdownLeftPosition}
          shouldDropdownShow={state.shouldDropdownShow}
        >
          <DropdownContent
            dropdownHeight={state.dropdownHeight}
            dropdownWidth={state.dropdownWidth}
          >
            {menuData.map((category: any, i: number) => (
              <CategoryContent
                // @ts-ignore
                ref={el => categoriesContainersRef.current[i] = el}
                actualDropdown={state.actualDropdown}
                shouldDropdownShow={state.shouldDropdownShow}
                i={i}
                key={i}
              >
                {category.subCategories.map((subCategory: any, j: number) => (
                  <Column key={j}>
                    <p>{subCategory.subCategory}</p>

                    {subCategory.subSubCategories.map((subSubCategory: any, k: number) => (
                      <Link key={k} href="/products">
                        <a>{subSubCategory.subSubCategory}</a>
                      </Link>
                    ))}
                  </Column>
                ))}
              </CategoryContent>
            ))}
          </DropdownContent>
        </DropdownWrapper>
      </Categories>
    </Wrapper>
  );
};

export default Links;