
define(["thirdparty/jquery", "sprite/frame/FrameSet"], function(jQuery, FrameSet) {
	
	var FrameLoop = function() {
		
		this.m_nScaleFactor = 4;
		
		this.m_nX = 0;
		this.m_nY = 0;
		this.m_nWidth;
		this.m_nHeight;
		
		this.m_mFrames = {
				
				"up": new FrameSet(4, 0),
				"down": new FrameSet(4, 1),
				"left": new FrameSet(4, 2),
				"right": new FrameSet(4, 3),
		};
		
		this.m_nMaxFrameSets = 4;
		
		this.m_oCurrentFrame;
		this.m_nCurrentFrameIndex = 0;
		
		this.setDirection("down");
	}
	
	FrameLoop.prototype.getCurrentFrameIndex = function() {
		return this.m_nCurrentFrameIndex;
	}
	
	FrameLoop.prototype.getCurrentFrameSet = function() {
		return this.m_nCurrentFrame;
	}
	
	FrameLoop.prototype.setDirection = function( sDirection ) {
		this.m_oCurrentFrame = this.m_mFrames[ sDirection ];
		//TODO: dont need to do this all the time
		this.m_nWidth = this.m_oCurrentFrame.getFrame(0).getPixelTable().getColumns() * this.m_nScaleFactor;
		this.m_nHeight = this.m_oCurrentFrame.getFrame(0).getPixelTable().getRows() * this.m_nScaleFactor;
	}
	
	FrameLoop.prototype.getFrameSet = function( sDirection ) {
		return this.m_mFrames[sDirection];
	}
	
	FrameLoop.prototype.previous = function() {
		
		this.m_nCurrentFrameIndex--;
		if( this.m_nCurrentFrameIndex < 0 ){
			this.setToLastFrame();
		}
		
		console.log( this.m_nCurrentFrameIndex );
	}
	
	FrameLoop.prototype.next = function() {
		
		this.m_nCurrentFrameIndex++;
		if( this.m_nCurrentFrameIndex >= this.m_oCurrentFrame.size() ){
			this.setToFirstFrame();
		}
		
		console.log( this.m_nCurrentFrameIndex );
	}
	
	FrameLoop.prototype.setToFirstFrame = function() {
		
		this.m_nCurrentFrameIndex = 0;
		this.m_nX = 0;
		this.m_nY = this.m_oCurrentFrame.getVerticalIndex() * this.m_nHeight;
	}
	
	FrameLoop.prototype.setToLastFrame = function() {
		
		this.m_nCurrentFrameIndex = this.m_oCurrentFrame.size()-1;
		this.m_nX = (this.m_oCurrentFrame.size()-1) * this.m_nWidth;
		this.m_nY = (this.m_nMaxFrameSets-1) * this.m_nHeight;
	}
	
	FrameLoop.prototype.getCoords = function() {
		
		return {
			"x": this.m_nX,
			"y": this.m_nY,
			"width": this.m_nWidth,
			"height": this.m_nHeight
		}
	}
	
	return FrameLoop;
	
});