<template>
    <main>
        <div class="container-fluid p-0">
            <div class="row p-0 m-0 bg-color-primary justify-content-center">
                <div class="col-12 py-3">
                    <nav class="container-fluid">
                        <div class="row">
                            <div class="col-auto"><router-link to="/">Home</router-link></div>
                            <div class="col-auto"><router-link to="/about">About</router-link></div>
                            <div class="col-auto">
                                <div class="btn-group m-0 p-0">
                                    <input type="text" class="form-control rounded-3 border-0" placeholder="search">
                                    <button class="form-control bg-white p-0"><font-awesome-icon
                                            icon="fa-solid fa-magnifying-glass m-0 p-0" aria-hidden="true" /></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </main>
    <slot></slot>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>