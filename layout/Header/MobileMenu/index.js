import React, { Component } from 'react';
import Link from 'next/link';
import { Wrapper, Category, Subcategory, List, Dropdown } from './styles';

class MobileMenu extends Component {
  constructor() {
    super();

    this.state = {
      data: undefined,
    };
  }

  componentWillReceiveProps() {
    if (this.props.openMobileMenu === false) {
      this.setState({
        data: this.props.menuData,
      });
    }
  }

  componentWillMount() {
    this.setState({ data: this.props.menuData });
  }

  toggleDropdown = (i, j) => {
    if (i !== undefined && j !== undefined) {
      const data = [...this.state.data];
      const category = { ...data[i] };
      const subCategory = { ...category.subCategories[j] };
      subCategory.mobileDropdownOpened = !this.state.data[i].subCategories[j]
        .mobileDropdownOpened;
      data[i].subCategories[j] = subCategory;

      this.setState({
        data,
      });
    } else if (i !== undefined && j === undefined) {
      const data = [...this.state.data];
      const category = { ...data[i] };
      category.mobileDropdownOpened = !this.state.data[i].mobileDropdownOpened;
      data[i] = category;

      this.setState({
        data,
      });
    }

    setTimeout(() => {
      console.log(this.state.data);
    }, 50);
  };

  render() {
    const { data } = this.state;

    const { toggleMobileMenu, openMobileMenu } = this.props;

    return (
      <Wrapper pose={openMobileMenu ? 'visible' : 'hidden'}>
        {data.map((category, i) => (
          // category
          <List
            key={'i' + i}
            withParent={false}
            pose={openMobileMenu ? 'visible' : 'hidden'}
            delay={openMobileMenu ? i * 40 + 50 : 0}
          >
            <Category onClick={e => this.toggleDropdown(i)}>
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
              {category.subCategories.map((subCategory, j) => (
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
                  <Subcategory onClick={e => this.toggleDropdown(i, j)}>
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
                      <Link href="/wszystko">
                        <a>Wszystko z tej kategorii</a>
                      </Link>
                    </List>

                    {subCategory.subSubCategories.map((subSubCategory, k) => (
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
  }
}

export default MobileMenu;
