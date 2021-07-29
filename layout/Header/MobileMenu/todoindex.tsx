import React, { useEffect, useState } from 'react';
import { Category, Dropdown, List, Subcategory, Wrapper } from './styles';
import Link from 'next/link';

interface MobileMenuProps {
  openMobileMenu: boolean;
  toggleMobileMenu: any;
  data: any;
}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({openMobileMenu, data}) => {
  // const [dataLocal, setDataLocal] = useState()
  function toggleDropdown(i: number, j?: number) {

  }

  // useEffect(() => {
  //   setDataLocal(data);
  // }, [])

  return (
    <Wrapper pose={openMobileMenu ? 'visible' : 'hidden'}>
        {data.map((category: any, i: number) => (
          // category
          <List
            key={'i' + i}
            withParent={false}
            pose={openMobileMenu ? 'visible' : 'hidden'}
            delay={openMobileMenu ? i * 40 + 50 : 0}
          >
            <Category onClick={() => toggleDropdown(i, undefined)}>
              {category.category}
              <svg
                style={{
                  transform: data[i].mobileDropdownOpened
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                  opacity: data[i].mobileDropdownOpened ? 1 : 0.3,
                }}
                viewBox="0 0 1000 1000"
              >
                <path d="M37,270l463,463 M631,607l339.5-339.5" />
              </svg>
            </Category>

            {/* dropdown with subCategories */}
            <Dropdown
              withParent={false}
              pose={data[i].mobileDropdownOpened ? 'visible' : 'hidden'}>
              {category.subCategories.map((subCategory: any, j: number) => (
                // subCategory
                <List
                  key={'j' + j}
                  withParent={false}
                  delay={
                    data[i].mobileDropdownOpened
                      ? (150 / data[i].subCategories.length) * j
                      : 0
                  }
                  pose={data[i].mobileDropdownOpened ? 'visible' : 'hidden'}>
                  <Subcategory onClick={() => toggleDropdown(i, j)}>
                    {subCategory.subCategory}
                    <svg
                      style={{
                        transform: data[i].subCategories[j].mobileDropdownOpened
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                        opacity: data[i].subCategories[j].mobileDropdownOpened
                          ? 1
                          : 0.3,
                      }}
                      viewBox="0 0 1000 1000"
                    >
                      <path d="M37,270l463,463 M631,607l339.5-339.5" />
                    </svg>
                  </Subcategory>

                  {/* dropdown with subSubCategories */}
                  <Dropdown
                    withParent={false}
                    pose={
                      data[i].subCategories[j].mobileDropdownOpened
                        ? 'visible'
                        : 'hidden'
                    }
                  >
                    <List>
                      {/* <Link href="/wszystko"> */}
                        <a>Wszystko z tej kategorii</a>
                      {/* </Link> */}
                    </List>

                    {subCategory.subSubCategories.map((subSubCategory: any, k: number) => (
                      // subSubCategory
                      <List
                        key={'k' + k}
                        withParent={false}
                        delay={
                          data[i].subCategories[j].mobileDropdownOpened
                            ? (450 /
                                data[i].subCategories[j].subSubCategories
                                  .length) *
                              k
                            : 0
                        }
                        pose={
                          data[i].subCategories[j].mobileDropdownOpened
                            ? 'visible'
                            : 'hidden'
                        }
                      >
                        <Link href={subSubCategory.url}>
                          <a>{subSubCategory.subSubCategory}</a>
                        </Link>
                      </List>
                    ))}
                  </Dropdown>
                </List>
              ))}
            </Dropdown>
          </List>
        ))}
      </Wrapper>
  );
};

export default MobileMenu;