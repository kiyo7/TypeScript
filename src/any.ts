import axios from 'axios';
export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  //objの中身のプロパティを型定義したもののまとめ
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[]; //objの中身がArticleでそれをまとめた配列型
  data = response.data;
  data = [
    {
      id: 1,
      title: 'title',
      description: 'description',
    },
  ];
  console.log(data);
});
