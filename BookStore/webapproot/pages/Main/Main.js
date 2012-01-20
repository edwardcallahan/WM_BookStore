dojo.declare("Main", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	svarGetLocationResult: function(inSender, inDeprecated) {
	  try { 
                if (inSender.getData().dataValue==="KR\n"){
                    this.buttonDownload.setDisabled(true);
                }
                
                if (inSender.getData().dataValue=="UK\n"){
                    app.toastSuccess("Wimbledon Special ! Stock up early for this summer", 10000);
                }
     
		  
	  } catch(e) {
		  console.error('ERROR IN svarGetLocationResult: ' + e); 
	  } 
  },
  svarOKToDownloadSuccess: function(inSender, inDeprecated) {
	  try {
        if(inSender.getData().dataValue==1){
            this.dialogSuccess.show();
        }
		  
	  } catch(e) {
		  console.error('ERROR IN svarOKToDownloadSuccess: ' + e); 
	  } 
  },
  _end: 0
});