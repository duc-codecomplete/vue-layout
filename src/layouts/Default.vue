<template>
    <div>
        <Header />
        <div class="content" style="min-height:300px">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Footer from '../components/Footer'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>