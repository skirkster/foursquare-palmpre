function StageAssistant() {
}

StageAssistant.prototype.setup = function() {
	this.cookieData=new Mojo.Model.Cookie("credentials");
	var credentials=this.cookieData.get();
	Mojo.Log.error("######got cookie");
	if (credentials){
		Mojo.Log.error("#######has a cookie: "+credentials.username+" / "+credentials.password);
		this.username=credentials.username;
		this.password=credentials.password;
		this.controller.pushScene('main',true,credentials);
	}else{
		Mojo.Log.error("###########no cookie");
		this.controller.pushScene('main',false);
	}
}
