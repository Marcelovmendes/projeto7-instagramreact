  import Post from "./Post";

  const Posts = () => {
    let post = [
      {
        userImg: "assets/img/meowed.svg",
        userText: "meowed",
        postImg: "assets/img/gato-telefone.svg",
        posText: "gato-telefone",
        likeImg: "assets/img/respondeai.svg",
        likeTitle: "respondeai",
        likeText: "outras pessoas",
        numLike: 10152
      },
      {
        userImg: "assets/img/barked.svg",
        userText: "barked",
        postImg: "assets/img/dog.svg",
        posText: "dog",
        likeImg: "assets/img/adorable_animals.svg",
        likeTitle: "adorable_animals",
        likeText: "outras pessoas",
        numLike: 99159
      },
      {
        userImg: "assets/img/barked.svg",
        userText: "barked",
        postImg: "assets/img/gato-telefone.svg",
        posText: "Lala",
        likeImg: "assets/img/adorable_animals.svg",
        likeTitle: "Neymar jr",
        likeText: "outras pessoas",
        numLike: 57999
      },
    ];
    return (
      <div class="posts">
        {post.map((p) => (
          <Post
            userImg={p.userImg}
            userText={p.userText}
            postImg={p.postImg}
            posText={p.posText}
            likeImg={p.likeImg}
            likeTitle={p.likeTitle}
            likeText={`outras ${String(p.numLike)} pessoas`}
            numLike={p.numLike}
          />
        ))}
      </div>
    );
  };

  export default Posts;
