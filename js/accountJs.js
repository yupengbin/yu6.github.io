	// ����ʹ����ԭʼ��js�﷨ʵ�֣��ɶ�Ӧ����jquery�﷨�����߼�����
	var demoImg = document.getElementById("demo_img");
	var demoInput = document.getElementById("absoluteInput");
    //����text block����ʾpassword block
	function hideShowPsw(){
		if (demoInput.type == "password") {
			demoInput.type = "text";
			demo_img.src = "images/invisible.png";
		}else {
			demoInput.type = "password";
			demo_img.src = "images/visible.png";
		}
	}