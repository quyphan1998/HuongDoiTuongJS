// tạo lớp đối tượng (prototype,class) nhân viên chứa các thuộc tính và phương thức của nhân viên
function NhanVien(ho,ten,ma,ngay,chucvu){
	//Thuộc tính
	this.Ho = ho;
	this.Ten = ten;
	this.MaNV = ma;
	this.NgayBatDau = ngay; 
	this.ChucVu = chucvu;
	this.LuongCB = 600;
	//Phương thức
	this.TinhLuong = function(){
		switch(this.ChucVu){
			case 'Sếp':
				return this.LuongCB * 3;
				break;
			case 'Trưởng phòng':
				return this.LuongCB * 2;
				break;
			case 'Nhân viên':
				return this.LuongCB * 1;
				break;
			default:
				return 'Chưa chọn chức vụ';
				break;
		}

	}
}