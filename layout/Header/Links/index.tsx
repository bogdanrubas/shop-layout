import React, { Component } from 'react';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import {
  LinksWrapper,
  Categories,
  Category,
  DropdownWrapper,
  DropdownContent,
  CategoryContent,
  Column,
} from './styles';

interface Props {
  products: string[];
}

interface State {
  // quantities: { [key: string]: number };
  shouldDropdownShow: boolean;
  quantityOfDropdownContent?: number;
  dropdownLeftPosition?: number;
  dropdownTriangleLeftPosition?: number;
  prevDropdown?: number;
  actualDropdown?: number;
  dropdownHeight?: number;
  dropdownWidth?: number;
}

class Links extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      shouldDropdownShow: false,
      quantityOfDropdownContent: undefined,
      dropdownLeftPosition: undefined,
      dropdownTriangleLeftPosition: undefined,
      prevDropdown: undefined,
      actualDropdown: undefined,
      dropdownHeight: undefined,
      dropdownWidth: undefined,
    };
  }

  handleMouseEnter = (i: any) => {
    const { actualDropdown } = this.state;

    const categoryNode = ReactDOM.findDOMNode(this.refs[`categoryRef${i}`]);
    const categoryContentNode = ReactDOM.findDOMNode(
      this.refs[`categoryContentRef${i}`]
    );
    let dropdownLeftPosition;
    let dropdownTriangleLeftPosition;
    let dropdownWidth;
    let dropdownHeight;

    if (categoryNode) {
      dropdownLeftPosition = categoryNode.offsetLeft;
      dropdownTriangleLeftPosition = categoryNode.offsetWidth / 2;
    }

    // dynamiczne okreslanie szerokosci i wysokosci w zaleznosci od zawartosci
    if (categoryContentNode) {
      dropdownWidth = categoryContentNode.offsetWidth;
      dropdownHeight = categoryContentNode.offsetHeight + 40;
    }

    if (i !== undefined) {
      this.setState({
        shouldDropdownShow: true,
        dropdownLeftPosition,
        prevDropdown: actualDropdown,
        actualDropdown: i,
        dropdownTriangleLeftPosition,
        dropdownHeight,
        dropdownWidth,
      });
    } else {
      this.setState({
        shouldDropdownShow: true,
      });
    }
  };

  handleMouseLeave = i => {
    const { shouldDropdownShow } = this.state;

    this.setState({
      shouldDropdownShow: false,
      prevDropdown: undefined,
      actualDropdown: undefined,
    });

    setTimeout(() => {
      if (shouldDropdownShow === false) {
        this.setState({
          dropdownLeftPosition: undefined,
          dropdownTriangleLeftPosition: undefined,
          dropdownHeight: undefined,
          dropdownWidth: undefined,
        });
      }
    }, 400);
  };

  getCategoryContentAnimation = i => {
    const { actualDropdown, shouldDropdownShow } = this.state;

    if (i > actualDropdown) {
      return {
        transitionDelay: '50ms',
        transform: 'translateX(70px)',
        pointerEvents: 'none',
        opacity: 0,
      };
    }
    if (i < actualDropdown) {
      return {
        transitionDelay: '50ms',
        transform: 'translateX(-70px)',
        pointerEvents: 'none',
        opacity: 0,
      };
    }
    if (actualDropdown === i) {
      return {
        transitionDelay: '80ms',
        transform: 'translateX(0px)',
        pointerEvents: 'auto',
        opacity: 1,
      };
    }
    if (shouldDropdownShow === false) {
      return {
        transitionDelay: '50ms',
        transform: 'translateX(0px)',
        pointerEvents: 'none',
        opacity: 0,
      };
    }
  };

  render() {
    const {
      dropdownLeftPosition,
      dropdownTriangleLeftPosition,
      dropdownHeight,
      dropdownWidth,
      shouldDropdownShow,
    } = this.state;

    const { menuData } = this.props;

    const menuCategories = menuData.map((category, i) => (
      <Category
        key={i}
        ref={`categoryRef${i}`}
        onMouseEnter={e => this.handleMouseEnter(i)}
      >
        {category.category}
      </Category>
    ));

    const dropdownContent = menuData.map((category, i) => (
      <CategoryContent
        ref={`categoryContentRef${i}`}
        style={this.getCategoryContentAnimation(i)}
        key={i}
      >
        {category.subCategories.map((subCategory, j) => (
          <Column key={j}>
            <p>{subCategory.subCategory}</p>

            {subCategory.subSubCategories.map((subSubCategory, k) => (
              <Link key={k} href="/products">
                <a>{subSubCategory.subSubCategory}</a>
              </Link>
            ))}
          </Column>
        ))}
      </CategoryContent>
    ));

    return (
      <LinksWrapper>
        <Categories onMouseLeave={() => this.handleMouseLeave()}>
          {menuCategories}

          <DropdownWrapper
            dropdownTriangleLeftPosition={dropdownTriangleLeftPosition}
            dropdownLeftPosition={dropdownLeftPosition}
            shouldDropdownShow={shouldDropdownShow}
            onMouseEnter={e => this.handleMouseEnter()}
            onMouseLeave={e => this.handleMouseLeave()}
          >
            <DropdownContent
              dropdownHeight={dropdownHeight}
              dropdownWidth={dropdownWidth}
            >
              {dropdownContent}
            </DropdownContent>
          </DropdownWrapper>
        </Categories>
      </LinksWrapper>
    );
  }
}

export default Links;
