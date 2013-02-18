
define(["thirdparty/jquery", "sprite/data/Pixel" ], function( jQuery, Pixel ) {

	var PixelTable = function(nRows, nColumns) {
		
		this.m_nRows = nRows;
		this.m_nColumns = nColumns;
		
		this.m_oRows = [];
		for(var i=0; i<this.m_nRows; i++)
		{
			var pPixels = [];
			for(var j=0; j<this.m_nColumns; j++) 
			{
				var oPixel = new Pixel(i, j);
				if(j%2==0){
					oPixel.setColor("#DB0B5F");
				}
				pPixels.push( );
			}
			this.m_oRows.push( pPixels );
		}
	}

	PixelTable.prototype.getRows = function() {
		this.m_nRows;
	}
	
	PixelTable.prototype.getColumns = function() {
		this.m_nColumns;
	}
	
	PixelTable.prototype.loadString = function( sTableString ) {
		//TODO: load the pixel table from a string
	}
	
	PixelTable.prototype.setColorAtPixel = function( sColor, nX, nY ) {
		this.m_oRows[nY][nX].setColor( sColor );
	}
	
	return PixelTable;
	
});