# vanilla js, html, css를 활용한 bubble sort 이미지화

## 프로젝트 하면서 알게된 것
### 노드 객체 생성 : document.createElement(요소의 이름);
### 텍스트 노드 객체 생성 : document.createTextNode(text);
### createElement, createTextNode로 만든 노드 객체는 DOM트리와는 관련이 없다.
### 노드 삽입하기 : 요소 노드.appendChild(삽입할 노드)
### 노드 옮기기 : 요소노드appendChild(요소노드.children[0]); //첫 번째 자식요소를 가장 마지막으로 배치한다.
### some : 이번 프로젝트를 하면서 처음 사용해본 배열의 내장함수이다. 처음에 forEach를 이용하여 배열에 내용을 삽입하려 했지만 array.forEach((item))이 내용이 추가 될 때마다 모든 배열을 계속 가지고 와서 조건을 줄 방법을 찾아보았다. forEach를 중단하는 방법은 try catch 문으로 break을 사용할 수 있지만 처음 사용해보는 some을 사용해 보기로 하였고,  return을 이용하여 foreach보다 더 깔끔하게 코드를 작성할 수 있었다.