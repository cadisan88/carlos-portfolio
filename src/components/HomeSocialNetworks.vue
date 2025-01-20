<script>

</script>

<template>
    <div class="social-networks-wrap">
        <div class="social-networks-vertical-line"></div>
        <div class="social-networks-links">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-andres-diaz/" target="_blank">
                        <img src="@/assets/linkedin.png">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/cadisan88" target="_blank">
                        <img src="@/assets/github.png">
                    </a>
                </li>
                <li>
                    <a href="http://www.google.com" target="_blank">
                        <img src="@/assets/instagram.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.social-networks-wrap {
    width: 10%;
    min-width: 32px;
    display: block;
    flex-wrap: wrap;
    flex-direction: row;
    z-index: 999;
    transform: translateY(-82px);

    .social-networks-vertical-line {
        border-right: 1px solid #F3F9F8;
        width: 50%;
        height: 300px;
    }

    .social-networks-links {
        width: 100%;
        align-items: center;

        ul {
            list-style: none;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            padding-top: 10px;
        }

        li {
            display: block;
            padding: 4px;
            margin: 0 0 0 0;

            a {
                list-style: none;
                text-decoration: none;

                img {
                    width: 30px;
                    border-radius: 100%;
                }
            }
            img:hover {
                box-shadow: 1px 1px 10px #F3F9F8;
            }
            
        }
    }
}
</style>
