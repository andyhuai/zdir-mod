$(document).ready(function(){
	msg();
});

//清空内容
function clear_msg(){
	$("#msg-content").empty();
}

var index = 0

function msg(){
	var content = new Array();
	// content[0] = 'Zdir v1.2已发布，建议尽快更新：<a href = "https://www.xiaoz.me/archives/12927" target = "_blank">https://www.xiaoz.me/archives/12927</a>';
	content.push("本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有。")
	//生成0-5的随机数
	const length = content.length;
	if (length > 0) {
		$("#msg-content").append(content[index]);
		index ++
		
		if (index == length) {
			index = 0
		}
		
		window.setTimeout("clear_msg()",9800);
		window.setTimeout("msg()",10000);
	}
	
}