<template>
    <div>
        <input id="button" type="button" value="调用parent.html中的say()函数" onclick="callParent()"/>
    </div>
</template>

<script>
    export default {
        name: "iframe_child",
        methods: {
            say(){
                alert("child.html");
            },
            callParent(){
                parent.say();
                parent.window.document.getElementById("button").value="调用结束";
            }
        }
    }
</script>

<style scoped>

</style>
