describe("MDC", function(){
	
	it("soma",function(){
		var ExpResult = 10;
		var result = soma(5,5);
		
		expect(ExpResult).toEqual(result);
	})
	
	it("mdc",function(){
		var ExpResult = 10;
		var result = mdc(10,20);
		
		expect(ExpResult).toEqual(result);
	})
	
});