function foodReport(name, age = '16222', ...favoriteFoods) {
    console.log(name + ',' + age);
    console.log(favoriteFoods);
}

// 가변 파라미터는 개수에 상관없이 들어가지만 무조건 배열 형태다
// foodReport('이몽룡', 20, '짜장면', '냉면', '불고기');
// foodReport('홍길동', 16, '초밥');

foodReport('ㄹㄹㄹ', 33, '초밥');
