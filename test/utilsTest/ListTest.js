var ulist = require('../../utils/list');
var should = require('should');

describe('List test function', function() {

	it('It should correctly calculate Variance', function() {
		list = [170,300,430,470,600]	
		ulist.variance(list).should.be.equal(21704)
		
		}),
	it('it should compare correctly two lists', function() {
		list1= [1,2,3,4,5,6,7]
		list2= [5,7,6,2,3,1,4]
		ulist.is_equal_set(list1,list2).should.be.true
		list1= [1,2,3,4,5]
		list2= [5,2,3,5,1]
		ulist.is_equal_set(list1,list2).should.be.false
	})

	it('it should calculate average correctly', function() {
		list1= [1,2,3,4,5,6,7]
		ulist.average(list1).should.be.equal(4)
	})

	it('it should calculate median correctly', function() {
		var list1 = [3, 8, 9, 1, 5, 7, 9, 21];
		ulist.median(list1).should.be.equal(7.5)
	})

})