Main.widgets = {
	languageDialog: ["wm.DesignableDialog", {"borderColor":"#333333","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","footerBorderColor":"#333333","height":212,"title":"language","titlebarBorderColor":"#333333","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			languageLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"138px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"languageLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"languageDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idEditor1: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","required":true,"width":"100%"}, {}],
				languageEditor1: ["wm.Text", {"border":"0","caption":"Language","captionSize":"200px","dataValue":"Bengali","emptyValue":"emptyString","formField":"language","height":"26px","required":true,"width":"100%"}, {}],
				abbreviationEditor1: ["wm.Text", {"caption":"Abbreviation","captionSize":"200px","dataValue":"be","emptyValue":"emptyString","formField":"abbreviation","height":"26px","width":"100%"}, {}],
				numbooksEditor1: ["wm.Number", {"caption":"Numbooks","captionSize":"200px","emptyValue":"zero","formField":"numbooks","height":"26px","width":"100%"}, {}],
				numdownloadsEditor1: ["wm.Number", {"caption":"Numdownloads","captionSize":"200px","emptyValue":"zero","formField":"numdownloads","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			languageSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"languageLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"languageLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			languageCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"languageDialog.hide"}]
		}]
	}],
	languageLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.languageLiveView1"}, {}],
	svarGetIPAddr: ["wm.ServiceVariable", {"operation":"getClientIP","service":"Java_Svc","startUpdate":true}, {"onSuccess":"svarGetLocation"}, {
		input: ["wm.ServiceInput", {"type":"getClientIPInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"ip"}, {}],
				wire1: ["wm.Wire", {"expression":"2","source":false,"targetProperty":"country"}, {}]
			}]
		}]
	}],
	svarGetLocation: ["wm.ServiceVariable", {"operation":"getLocation","service":"ip2location"}, {"onResult":"svarGetLocationResult"}, {
		input: ["wm.ServiceInput", {"type":"getLocationInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svarGetIPAddr.dataValue","targetProperty":"ip"}, {}]
			}]
		}]
	}],
	dialogSuccess: ["wm.DesignableDialog", {"height":"230px","noMaxify":true,"noMinify":true,"title":"","titlebarBorderColor":"#333333","width":"460px","containerWidgetId":"containerWidget1","buttonBarId":"buttonBar"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent","wm_FontColor_Blue","wm_FontFamily_Verdana","wm_TextDecoration_Bold"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","margin":"0","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_36px"]},"border":"0","caption":"Thank you !","height":"43px","padding":"4","width":"247px"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","borderColor":"#333333","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}]
	}],
	svarOKToDownload: ["wm.ServiceVariable", {"operation":"okToDownload","service":"Java_Svc"}, {"onSuccess":"svarOKToDownloadSuccess"}, {
		input: ["wm.ServiceInput", {"type":"okToDownloadInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"100","source":false,"targetProperty":"custId"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"borderColor":"#333333","height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"65%"}, {}, {
			panelHeader: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				labelTitle: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"border":"0","caption":"VMware BookStore","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"140px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {"borderColor":"#999999","clientBorder":"1","clientBorderColor":"#999999","headerHeight":"29px","margin":"0,2,0,2","transition":"fade"}, {}, {
					layerBrowse: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Browse","horizontalAlign":"left","margin":"2,0,2,0","padding":"10","verticalAlign":"top"}, {}, {
						languageLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"languageDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"languageLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"languageDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"languageSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							languageDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"language","title":"Language","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"abbreviation","title":"Abbreviation","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"numbooks","title":"Numbooks","width":"100px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"numdownloads","title":"Numdownloads","width":"100px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"235px","margin":"4","selectFirstRow":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"languageLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							languageGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								languageNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"languageLivePanel1.popupLivePanelInsert"}],
								languageUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"languageLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"languageDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								languageDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"languageLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"languageDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}],
							panel4: ["wm.Panel", {"height":"205px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								dojoFisheye1: ["wm.DojoFisheye", {"border":"0","height":"60px","imageLabelField":"title","imageUrlField":"cover","padding":"0","width":"400px"}, {"onClick":"layerDownload"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"languageDojoGrid.selectedItem.books","targetProperty":"dataSet"}, {}]
									}]
								}],
								dojoChart1: ["wm.DojoChart", {"border":"0","chartType":"ClusteredColumns","padding":"4","width":"380px","xAxis":"abbreviation","yAxis":"numbooks, numdownloads"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"languageLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}]
							}]
						}]
					}],
					layerDownload: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Download","horizontalAlign":"center","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
						simpleForm1: ["wm.SimpleForm", {"fitToContentHeight":true,"height":"104px","horizontalAlign":"left","verticalAlign":"top","width":"550px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							idEditor2: ["wm.Number", {"caption":"Id","captionSize":"200px","emptyValue":"zero","formField":"id","height":"26px","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem.id","targetProperty":"dataValue"}, {}]
								}]
							}],
							titleEditor1: ["wm.Text", {"caption":"Title","captionSize":"200px","emptyValue":"emptyString","formField":"title","height":"26px","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem.title","targetProperty":"dataValue"}, {}]
								}]
							}],
							authorEditor1: ["wm.Text", {"caption":"Author","captionSize":"200px","emptyValue":"emptyString","formField":"author","height":"26px","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem.author","targetProperty":"dataValue"}, {}]
								}]
							}],
							publishdateEditor1: ["wm.DateTime", {"caption":"Publishdate","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"publishdate","height":"26px","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem.publishdate","targetProperty":"dataValue"}, {}]
								}]
							}],
							coverEditor1: ["wm.Text", {"caption":"Cover","captionSize":"200px","emptyValue":"emptyString","formField":"cover","height":"26px","showing":false,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFisheye1.selectedItem.cover","targetProperty":"dataValue"}, {}]
								}]
							}]
						}],
						pictureSelectedBook: ["wm.Picture", {"border":"0","height":"145px","width":"320px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"coverEditor1.dataValue","targetProperty":"source"}, {}]
							}]
						}],
						buttonDownload: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"Download","height":"40px","margin":"4","width":"180px"}, {"onclick":"svarOKToDownload"}]
					}]
				}]
			}],
			panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright YOU 2012 ","height":"100%","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}