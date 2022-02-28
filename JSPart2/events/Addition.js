<button onmouseover="mouseoverFun()" id="one">One</button>;

<button onmouseOut="mouseoutFun()" id="two">Two</button>;
<button>Three</button>;
<button>Four</button>;

<script>
    
    function mouseoverFun() {
        document.getElementById('one').style.background = "blue"

    }
    function mouseOutFun() {
        document.getElementById("two").style.background = "yellow"
    }
    
</script>
