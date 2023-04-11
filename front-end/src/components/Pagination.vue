<template>
    <nav aria-label="Paginação">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link rounded-circle" @click="goToPage(currentPage - 1)" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
                <a class="page-link rounded-circle" @click="goToPage(page)" href="#">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link rounded-circle" @click="goToPage(currentPage + 1)" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
@import '../assets/Pagination.css';
</style>

<script>
export default {
    name: 'Pagination',
    emits: ['page-changed'],
    props: {
        totalPages: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        pages() {
            const pages = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }
    },
    methods: {
        goToPage(page) {
            if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
                this.$emit('page-changed', page);
            }
        }
    }
};
</script>