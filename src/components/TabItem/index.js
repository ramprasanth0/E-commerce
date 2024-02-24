import './index.css'

const TabItem = props => {
    const { tabDetails, clickTabItem, isActive } = props
    const { tabId, displayText } = tabDetails
    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

    return (
        <li className="tab-item-container">
            <div className="border rounded p-2 me-4">
                <button
                    type="button"
                    className={`btn btn-primary ${activeTabBtnClassName}`}
                    onClick={onClickTabItem}
                >
                    {displayText}
                </button>
            </div>

        </li>
    )
}

export default TabItem
