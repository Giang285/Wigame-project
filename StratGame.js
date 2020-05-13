let isCollapse = true;
        function colapExpand(a){
            let div = document.getElementById(a);
            if(isCollapse == true){
                div.style.visibility = "visible";
                div.style.height = "fit-content";
                isCollapse = false;
            }else{
                div.style.visibility = "hidden";
                div.style.height = "0px";
                isCollapse = true;
            }
        }

        