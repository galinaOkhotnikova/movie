<template>
    <div className="navbar">
        <div className="navbar__logo">
            <router-link :to="{ name: 'main' }">
                <img src="/images/logo.svg" alt="logo"/>
            </router-link>
        </div> 
        <div className="navbar__right">
            <a href="/" className="navbar__right-button">
                monthly <br/>
                subscription
            </a>
            <div className="navbar__right-icons">
                <router-link :to="{ name: 'rated' }">
                    <img src="/images/User.svg" alt="user"/>
                </router-link>
                <router-link :to="{ name: 'favorites' }">
                    <img src="/images/heart.svg" alt="heart"/>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .navbar {
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-background);
        padding: 1rem 2rem;

        &__logo {
            display: flex;
            justify-content: flex-start;
            cursor: pointer;
        }
        
        &__right {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            &-button {
                padding: 5px 35px 5px 35px;
                text-decoration: none;
                display: inline-block;
                position: relative;
                text-transform: uppercase;
                color: var(--color-white);
                font-family: var(--font-base);
                background-color: var(--color-background);
                font-size: 12px;
                text-align: center;
                font-style: normal;
                letter-spacing: 0.1em;
                font-weight: 600;
                width: 172px;
                height: 44px;
                border-radius: 40px;
                margin-right: 1rem;
                
                &::after {
                    cursor: pointer;
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: -2.8px;
                    left: -3px;
                    border-radius: 30px;
                    width: 178px;
                    height: 50px;
                    background-image: var(--main-gradient);
                    background-size: 200%;
                    animation: animateborder 3s ease infinite paused;
                }

                &:hover::after{
                    animation-play-state: running;
                }
            }
            &-icons {
                display: flex;

                img {
                    margin-left: 1rem;
                    cursor: pointer;
                }
            }
        }

        @keyframes animateborder {
            0% {
                background-position: 0%;
            }
            50% {
                background-position: 100%;
            }
            100% {
                background-position: 0%;
            }
        }
    }
</style>