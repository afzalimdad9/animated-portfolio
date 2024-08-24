import React, { useState } from 'react'
import ai from '../SVGs/AI'
import Hamburger from '../SVGs/Hamburger'
import CurvedText from '../CurvedText';
import Image from 'next/image';

const getMenuItemOpacity = ({ menus, i }) => {
    const length = (menus || []).length;
    const opacity = ((0.8 / length * (length - i))) + 0.4;
    return opacity;
}

const cbHeight = (index) => 60 + (index) * 80

const HamburgerBody = ({ menus, handleItemSelect }) => (
    <div
        style={{
            width: cbHeight((menus || []).length),
            height: cbHeight((menus || []).length),
        }}
        className='ai-hamburger'>
        <div className="flex-center">
            {(menus || []).map((menu, i) => {
                return (
                    <div
                        key={menu.title}
                        className='flex-center'
                    >
                        <div
                            style={{
                                width: cbHeight(i + 1),
                                height: cbHeight(i + 1),
                                zIndex: menus.length - i,
                            }}
                            onClick={() => handleItemSelect(menu, i)}
                            className='ai-hamburger-item'
                        >
                            <div
                                className='ai-hamburger-item-bg'
                                style={{
                                    opacity: getMenuItemOpacity({ menus, i })
                                }}
                            />
                            <CurvedText
                                radius={cbHeight(i + 1) / 2}
                                text={menu.title || ''}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)

const Header = ({ data: { menus, handleItemSelect, handleIconClick, rightBtn, logo } }) => {

    const [menuVisibled, handleVisibleMenu] = useState(false);

    const onChangeMenu = () => handleVisibleMenu(!menuVisibled);

    return (
        <header className='ai-header'>
            <div className='ai-header-container'>
                <div>
                    {!logo?.src ? (
                        <ai onClick={handleIconClick} width={45} height={45} />
                    ) : (
                        <div onClick={handleIconClick} className='ai-logo-bg'>
                            <Image width={60} height={60} src={logo.src} alt={logo.alt} />
                        </div>
                    )}
                </div>
                <div className='d-flex'>
                    {rightBtn && (
                        <div>
                            <button onClick={rightBtn.onClick} className='ai-button-md mx-3 mx-lg-5'>
                                {rightBtn.label}
                            </button>
                        </div>
                    )}
                    <div className={`ai-header-menu ${menuVisibled && 'ai-header-menu-visible'}`}>
                        <Hamburger className="ai-hamburger-icon" onClick={onChangeMenu} width={30} height={30} />
                        <HamburgerBody menus={menus} handleItemSelect={handleItemSelect} />
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header
