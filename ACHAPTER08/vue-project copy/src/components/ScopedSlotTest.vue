<template>
    <div>
        <h3>당신이 경험한 프론트 엔드 기술은?</h3>

        <CheckBoxList :items="items" @check-changed="CheckBoxChanged">
            <template v-slot:icon="p1">
                <i v-if="p1.checked" class="far fa-grin-beam"></i>
                <i v-else class="far fa-frown"></i>
            </template>
            <template v-slot:default="p2">
                <span v-if="p2.checked" style="color: blue; text-decoration: underline">
                    <i>{{ p2.label }}</i>
                </span>
                <span v-else style="color: gray">{{ p2.label }}</span>
            </template>
        </CheckBoxList>
    </div>
</template>

<script>
import CheckBoxList from './CheckBoxList.vue';
export default {
    name: 'ScopedSlotTest',
    components: { CheckBoxList },
    data() {
        return {
            items: [
                { id: 'v', checked: true, label: 'vue' },
                { id: 'v', checked: false, label: 'vue' },
                { id: 'v', checked: false, label: 'vue' },
                { id: 'v', checked: false, label: 'vue' },
            ],
        };
    },
    methods: {
        CheckBoxChanged(e) {
            let item = this.items.find((item) => item.id === e.id);
            item.checked = e.checked;
        },
    },
};
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
