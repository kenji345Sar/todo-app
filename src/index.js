import "./styles.css";

const onClickadd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncommpleList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//　未完了リストに指定の要素を追加
const createIncommpleList = (text) => {
  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //divの子要素pタグ作成
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグの親タグを未完了リストから消す
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);

    // li生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    //divの子要素pタグ作成
    const p = document.createElement("p");
    p.innerText = text;
    div.appendChild(p);
    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親の親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;

      // 完了リストから削除
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncommpleList(text);
    });

    div.appendChild(backButton);
    // liタグの子要素に各要素を設定
    li.appendChild(div);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  deleteButton.addEventListener("click", () => {
    // const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
