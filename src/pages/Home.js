import { Component } from 'react';
import Header from '../components/Header';
import TabItem from '../components/TabItem';
import ProductItem from '../components/ProductItem';
import Footer from '../components/Footer';

const tabsList = [
    { tabId: 'WOMEN', displayText: 'Women' },
    { tabId: 'MEN', displayText: 'Men' },
    { tabId: 'KIDS', displayText: 'Kids' },
]

const productList = [
    {
        productId: 0,
        category: 'WOMEN',
        imageURL: '/assets/img/women_ethinic_wear.jpg',
        title: 'Women - Ethnic & Fusion Wear',
        description:
            '',
    },
    {
        productId: 1,
        category: 'WOMEN',
        imageURL: '/assets/img/women_western.avif',
        title: 'Women - Western Wear',
        description:
            '',
    },
    {
        productId: 2,
        category: 'WOMEN',
        imageURL: '/assets/img/women-saree.webp',
        title: 'Saree Or Suit Materials',
        description:
            '',
    },
    {
        productId: 3,
        category: 'WOMEN',
        imageURL: '/assets/img/women_shoes.avif',
        title: 'Footwear',
        description:
            '',
    }, {
        productId: 4,
        category: 'WOMEN',
        imageURL: '/assets/img/women_accessories.avif',
        title: 'Accessories',
        description:
            '',
    }, {
        productId: 5,
        category: 'WOMEN',
        imageURL: '/assets/img/women_ethinic_wear.jpg',
        title: 'Women - Ethnic & Fusion Wear',
        description:
            '',
    },
    {
        productId: 6,
        category: 'WOMEN',
        imageURL: '/assets/img/women_western.avif',
        title: 'Women - Western Wear',
        description:
            '',
    },
    {
        productId: 7,
        category: 'WOMEN',
        imageURL: '/assets/img/women-saree.webp',
        title: 'Saree Or Suit Materials',
        description:
            '',
    },
    {
        productId: 8,
        category: 'WOMEN',
        imageURL: '/assets/img/women_shoes.avif',
        title: 'Footwear',
        description:
            '',
    }, {
        productId: 9,
        category: 'WOMEN',
        imageURL: '/assets/img/women_accessories.avif',
        title: 'Accessories',
        description:
            '',
    },
    {
        productId: 10,
        category: 'MEN',
        imageURL: '/assets/img/men_shirts.avif',
        title: 'Men Shirts',
        description:
            '',
    },
    {
        productId: 11,
        category: 'MEN',
        imageURL: '/assets/img/men_topsavif.avif',
        title: 'Men T-Shirts',
        description: '',
    },
    {
        productId: 12,
        category: 'MEN',
        imageURL: '/assets/img/men_bottom_wear.avif',
        title: 'Men Trousers and Pants',
        description:
            '',
    }, {
        productId: 13,
        category: 'MEN',
        imageURL: '/assets/img/men_footwearavif.avif',
        title: 'Footwear',
        description:
            '',
    }, {
        productId: 14,
        category: 'MEN',
        imageURL: '/assets/img/men_accessories.avif',
        title: 'Accessories',
        description:
            '',
    }, {
        productId: 15,
        category: 'MEN',
        imageURL: '/assets/img/men_shirts.avif',
        title: 'Men Shirts',
        description:
            '',
    },
    {
        productId: 16,
        category: 'MEN',
        imageURL: '/assets/img/men_topsavif.avif',
        title: 'Men T-Shirts',
        description: '',
    },
    {
        productId: 17,
        category: 'MEN',
        imageURL: '/assets/img/men_bottom_wear.avif',
        title: 'Men Trousers and Pants',
        description:
            '',
    }, {
        productId: 18,
        category: 'MEN',
        imageURL: '/assets/img/men_footwearavif.avif',
        title: 'Footwear',
        description:
            '',
    }, {
        productId: 19,
        category: 'MEN',
        imageURL: '/assets/img/men_accessories.avif',
        title: 'Accessories',
        description:
            '',
    },
    {
        productId: 20,
        category: 'KIDS',
        imageURL: '/assets/img/boys_wear.avif',
        title: 'Boys Clothing',
        description:
            '',
    },
    {
        productId: 21,
        category: 'KIDS',
        imageURL: '/assets/img/girls_wear.avif',
        title: 'Girls Clothing',
        description:
            '',
    }
]
class Home extends Component {
    state = { activeTabId: tabsList[0].tabId }
    clickTabItem = tabValue => {
        this.setState({ activeTabId: tabValue })
    }
    getFilteredProjects = () => {
        const { activeTabId } = this.state
        const filteredProjects = productList.filter(
            eachprojectDetails => eachprojectDetails.category === activeTabId,
        )
        return filteredProjects
    }
    render() {
        const { activeTabId } = this.state
        const filteredProjects = this.getFilteredProjects()
        return (
            <div className="app-container">
                <Header />
                <h1 className="">Shop By Category</h1>
                {/* <p className="description">
        </p> */}

                <ul className="tabs-container d-flex">
                    {tabsList.map(tabDetails => (
                        <TabItem
                            key={tabDetails.tabId}
                            tabDetails={tabDetails}
                            clickTabItem={this.clickTabItem}
                            isActive={activeTabId === tabDetails.tabId}
                        />
                    ))}
                </ul>
                <ul className="product-list-container">
                    {filteredProjects.map(productDetails => (
                        <ProductItem
                            key={productDetails.productId}
                            productDetails={productDetails}
                        />
                    ))}
                </ul>
                <img src='/assets/img/carousel-3.avif' className="d-block w-100" alt='promotional'></img>
                <img src='/assets/img/carousel-4.avif' className="d-block w-100" alt='promotional'></img>
                <img src='/assets/img/carousel-5.avif' className="d-block w-100" alt='promotional'></img>
                <Footer />
            </div>
        )
    }
}

export default Home;