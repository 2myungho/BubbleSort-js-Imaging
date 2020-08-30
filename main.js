window.onload = function () {
    const input = document.getElementById("input");
    const textForm = document.getElementById("textForm");

    const text = document.getElementById("text"); //preview
    const submit = document.getElementById("submit");
    const sort_btn = document.getElementById("sort");
    const random_btn = document.getElementById("random");

    const array = []; //빈 배열 생성

    random_btn.addEventListener("click", random);
    function random(){
        array.length = 0; //배열 초기화
    
        console.log(textForm.children.length)
        
        for(let i = 0; i<10; i++){
            if(textForm.children.length>=10){
                textForm.removeChild(textForm.children[i]);
            } //새로운 항목을 위한 제거
            let num_random = Math.floor(Math.random()*100)
            array.push(num_random); //10가지 랜덤 배열 생성
            const li = document.createElement("li");
            const random_text = document.createTextNode(num_random);
            li.appendChild(random_text);
            textForm.appendChild(li)
            const children = textForm.children.length // class +1
            li.setAttribute("id", "items" + children); //li에 test 클래스 생성
            textForm.children[i].style.backgroundColor = `rgba(255,${i * 15},${i * 15},1)`
        }
        console.log(array)
    }


    //sort
    sort_btn.addEventListener("click", sort);
    function sort() {

        //한번씩 실행
        let save;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const items = document.getElementsByTagName("li");
                items[j].style.backgroundColor = `rgba(255,${j * 15},${j * 15},1)`
                save = array[j] //save에 값 저장
                array[j] = array[j + 1] //값 교환
                items[j].innerHTML = array[j + 1]
                array[j + 1] = save //값 교환
                items[j + 1].innerHTML = save
            }
            console.log(`${j}번째 : ${array}`)
        }
        

        //한번에 실행
        // let save;
        // for(let i = 0; i<array.length; i++){
        //     for(let j = 0; j<array.length; j++){
        //         if(array[j] > array[j+1]){
        //             const items = document.getElementsByTagName("li");
        //             save = array[j] //save에 값 저장
        //             array[j] = array[j+1] //값 교환
        //             array[j+1] = save //값 교환
        //             items[j+1].innerHTML = save
        //             items[0].innerHTML = array[j]
        //         }
        //     }
        //     console.log(`${i}번째 : ${array}`)
        // }
    }

    //submit
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        texts();
    });

    //text
    input.addEventListener("change", updateText);
    function updateText(e) {
        text.textContent = e.target.value;
    }

    //li 생성
    function texts(e) {
        let value = input.value;
        array.push(Number(value)); //배열 생성
        const last_item = array.slice(-1).pop();

        array.some((item) => {
            const li = document.createElement("li"); // li 노드객체 생성
            if (item === last_item) {
                if (textForm.children.length < 10) {
                    const items = document.createTextNode(item); //배열의 값을 items에 저장
                    li.appendChild(items); //items를 li에 추가
                    textForm.appendChild(li); //li를 ul에 추가
                    const children = textForm.children.length // class +1
                    li.setAttribute("id", "items" + children); //li에 test 클래스 생성
                    for(let i =0; i < textForm.children.length; i++){
                        textForm.children[i].style.backgroundColor = `rgba(255,${i * 15},${i * 15},1)`
                    }
                    
                } else {
                    alert("10개까지 생성하실 수 있습니다.")
                    array.pop();
                }
                return item === last_item;
            }
        });
        //element.style.backgroundColor = "red";

        if (value === "") value = 0; //빈 값일 경우 0을 반환
        console.log(array);
        input.value = ""; //input.velue 초기화
        if (value > 100) {
            alert("100이상의 수는 입력할 수 없습니다."); // 100초과 수 제한
            array.pop();
            textForm.removeChild(textForm.lastChild);
        }
    }
}

