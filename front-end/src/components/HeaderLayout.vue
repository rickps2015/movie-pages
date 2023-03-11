<template>
    <main>
        <div class="container-fluid p-0">
            <div class="row p-0 m-0 bg-color-primary justify-content-center">
                <div class="col-12 py-3">
                    <nav class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-auto"><router-link class="fw-bold" style="font-size: 1.2rem;" to="/">Home</router-link></div>
                            <div class="col-auto">
                                <div class="btn-group m-0 p-0">
                                    <input type="text" class="form-control rounded-pill border-0 mx-1" placeholder="Search" style="width: 30rem">
                                    <!-- <button class="form-control bg-white p-0"><font-awesome-icon
                                            icon="fa-solid fa-magnifying-glass m-0 p-0" aria-hidden="true" /></button> -->
                                </div>
                            </div>
                            <div class="col-auto"><router-link class="fw-bold" style="font-size: 1.2rem;" to="/about">About</router-link></div>
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