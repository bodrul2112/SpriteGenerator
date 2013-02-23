
define(["thirdparty/jquery"], function( jQuery ) {
	
	var FrameDesigner = function() {
		
		this.m_oLoadedFrameSet;
		this.m_eElement = $('.gridContainer');
		this.m_eCanvas = this.m_eElement.find('.gridCanvas');
		this.ctx = this.m_eCanvas[0].getContext('2d');
	}
	
	FrameDesigner.prototype.setSprite = function( oSprite ) {
		
		this.m_oLoadedFrameSet = oSprite.getFrameRenderer();
		
		FrameLoop.prototype.getCurrentFrameIndex = function() {
			return this.m_nCurrentFrameIndex;
		}
	}
	
	return FrameDesigner;
	
});