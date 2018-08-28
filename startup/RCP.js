console.log("rcp.js loaded!")

const player =
    parseInt(prompt("0:グー 1:チョキ 2:パー　を数字で入力してください"));

const computer = Math.floor(Math.random() * 3);


// player の値をチェック
if (isNaN(player)) {
    console.log("数値以外です");
} else if (player >= 0 && player <= 2) {
    // 勝敗の判定（プレイヤー視点で[かち・まけ・あいこ]を出力）
    if (player === computer) {
        console.log("あいこ")
    } elif if

} else {
    console.log("数値が範囲を超えています");
}