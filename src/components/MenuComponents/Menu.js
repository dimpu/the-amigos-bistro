import React, { Component } from "react"

import { StaticQuery, graphql } from "gatsby"
// import styled from "styled-components"
import { Section, Title } from "../../utils"

import MenuItemsContainer from "./MenuItemsContainer"

const GET_MENU = graphql`
  {
    menuItems: allContentfulMenu {
      edges {
        node {
          name
          price
          ingredients
          category {
            childContentfulCategoryTitleTextNode {
              internal {
                content
              }
            }
          }
          image {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default class Menu extends Component {
  render() {
    return (
      <Section>
        <Title title="menu" />
        <StaticQuery
          query={GET_MENU}
          render={data => {
            const menuItems = data.menuItems.edges
            return <MenuItemsContainer menuItems={menuItems} />
          }}
        />
      </Section>
    )
  }
}

// const MenuItemWrapper = styled.div``
