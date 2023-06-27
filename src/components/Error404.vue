<template>
    <div className="error404__wrapper">
        <div className="error404__wrapper-right">
            <p className="error404__wrapper-right-text1">Ooops...</p>
            <p className="error404__wrapper-right-text2">Page not found</p>
            <p className="error404__wrapper-right-text3">The page you are looking for doesn’t exist. 
                Please go back and start with main page
            </p>
            <div className="error404__wrapper-right-wrapperbtn">
                <router-link :to="{ name: 'main' }">
                    <button className="error404__wrapper-right-wrapperbtn-btn button">
                        Go back
                    </button>
                </router-link>
            </div>
        </div>
        <div className="error404__wrapper-left">
            <img src="/images/404.svg" alt="error404"/>

        </div>
    </div>
</template>


<style lang="scss" scoped>

    .error404__wrapper {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-accent-background);
        color: white;
        height: 90vh;
        width: 100%;
        font-family: var(--font-base);

        &-right {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            margin-top: 50px;
            width: 42%;
            // border: 1px solid red;

            &-text1 {
                font-style: normal;
                font-weight: 700;
                font-size: 80px;
            }

            &-text2 {
                font-style: normal;
                font-weight: 400;
                font-size: 70px;
            }

            &-text3 {
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 43px;
                opacity: 0.8;
            }
            &-wrapperbtn {
                margin-top: 50px;
                display: flex;
                justify-content: center;
                margin-left: -50px;
            }
        }

        &-left {
            margin-right: 100px;
            margin-top: 25px;
        }
    }

</style>