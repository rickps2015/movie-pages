<template>
    <main>
        <div class="container-fluid p-0">
            <div class="row p-0 m-0 bg-color-primary justify-content-center">
                <div class="col-12 py-3">
                    <nav>
                        <ul class="row justify-content-center p-0 m-0" style="list-style: none">
                            <li class="col-auto"><img src="../assets/images/logo.png" style="width: 160px;"></li>
                            <li class="col-4">
                                <div class="input-group form-control rounded-pill border-0">
                                    <span class="input-group-text form-control rounded-pill bg-white border-0">
                                        <input type="text" class="form-control rounded-pill border-0"
                                            placeholder="O que você está procurando?">
                                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" aria-hidden="true" /></span>
                                </div>
                            </li>
                            <li class="col-auto"><router-link to="/">Home</router-link></li>
                            <li class="col-auto"><router-link to="/about">About</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </main>
    <slot></slot>
</template>

<script>
export default {
    nama: 'HeaderLayout',
    return() {

    }
}
</script>