<template>
    <nut-tab @tab-switch="tabSwitch">
        <nut-tab-panel tabTitle="页签1">页签1</nut-tab-panel>
        <nut-tab-panel tabTitle="页签2">页签2</nut-tab-panel>
        <nut-tab-panel tabTitle="页签3">页签3</nut-tab-panel>
    </nut-tab>
</template>

<script>
export default {
    name: "myTab",
    methods: {
        tabSwitch: function(index, event) {
            console.log(index + "--" + event.target);
        }
    }
};
</script>
