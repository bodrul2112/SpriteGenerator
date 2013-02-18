
define(["thirdparty/jquery", "sprite/frame/Frame"], function( jQuery, Frame ) {
	
	var FrameSet = function( nFrames, nVerticalIndex ) {
		
		this.m_nVerticalIndex = nVerticalIndex;
		
		this.m_pFrames = [];
		for(var i=0; i<nFrames; i++ ) {
			this.m_pFrames.push( new Frame() );
		}
	}
	
	FrameSet.prototype.getFrame = function( nFrame ) {
		
		return this.m_pFrames[nFrame];
	}
	
	FrameSet.prototype.size = function() {
		return this.m_pFrames.length;
	}
	
	FrameSet.prototype.add = function() {
		
	}
	
	FrameSet.prototype.remove = function() {
		
	}
	
	FrameSet.prototype.getVerticalIndex = function( nFrame ) {
		
		return this.m_nVerticalIndex;
	}
	
	return FrameSet;
	
});
