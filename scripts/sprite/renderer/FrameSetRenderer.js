
define(["thirdparty/jquery"], function( jQuery ) {
	
	var FrameSetRenderer = function( nScaleFactor ) {
		
		this.m_oSprite;
	}
	
	FrameSetRenderer.prototype.loadSprite = function( oSprite ) {
		
		this.m_oSprite = oSprite;
	}
	
	FrameSetRenderer.prototype._loadFrame = function() {
			
	}
	
	FrameSetRenderer.prototype.renderNextFrame = function() {
		
	}
	
	FrameSetRenderer.prototype.renderPreviousFrame = function() {
		
	}
	
	/**
	 * Pass in a canvas2d context
	 */
	FrameSetRenderer.prototype.render( ctx, oSprite ){
		
		
	}
	
	FrameSetRenderer.prototype._getPixelTable( oSprite ){
		
		this.m_oCurrentFrameIndex = oSprite.getFrameLoop().getCurrentFrameSet().getCurrentFrameIndex();
		this.m_oCurrentFrame = oSprite.getFrameLoop().getCurrentFrameSet().getFrame( this )
	}
	
	return FrameSetRenderer;
	
});
