<template>
    <div class="profile-div">
        <div class="avatar-outline">
            <img  class="avatar" :src="profile.avatar">
        </div>
        <div class="info-view">
            <p>这是主人的联系方式，快去联系吧～</p>
            <hr class="deviding">
            <table class="contacts" nowarp>
                <tr>
                    <td class="col1">QQ: {{ profile.qq }}</td>
                    <td class="col2">微信: {{ profile.wchat }}</td>
                </tr>
                <tr>
                    <td class="col1">手机: {{ profile.phone }}</td>
                    <td class="col2">邮箱: {{ profile.email }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        props: ['profile']
        /* profile is an object
         * {
         *  avatar: imageUrl
         *  qq,wchat,phone,email: as literal meaning
         * }
         */
    }
</script>

<style scoped>
    .profile-div{
        text-align: center;
        background-color: #66cbff;
        border-radius: 10px;
        box-shadow: 0 0 5px 1px #aaaaaa;
        margin: 3rem 1rem 1.5rem 1rem;
        color: #ffffff;
    }
    .profile-div>.avatar-outline{
        width: 72px;
        height: 72px;
        border-radius: 64px;
        background-color: #66cbff;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .avatar{
        width: 64px;
        height: 64px;
        margin: 0;
        border-radius: 32px;
        position: relative;
        top: 4px;
    }
    .edit{
        width: 1rem;
        height: 1rem;
        float: right;
        position: relative;
        right: 2rem;
        top: 1rem;
    }
    .info-view{
        padding-top: 48px;
    }
    .info{
        display: inline-block;
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 1rem;
    }
    .info.nick{
        font-size: 1.75rem;
    }
    .deviding{
        border: 0;
        border-top: 2px dashed #fefefe;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        width: 85%;
        overflow: visible;
    }
    .deviding:before{
        display: block;
        content: "";
        height: 16px;
        margin-top: -8px;
        border-left: 2px solid #fefefe;
        border-right: 2px solid #fefefe;
    }
    .contacts{
        min-width: 80%;
        font-size: 0.75rem;
        table-layout: fixed;
        text-align: left;
        padding-bottom: 1rem;
        border-collapse:separate;
        border-spacing: 0.75rem 0.5rem;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    }
    .col2{
        position: relative;
        left: 0.5rem;
    }
</style>
