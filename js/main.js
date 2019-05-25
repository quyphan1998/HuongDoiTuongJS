
//tạo mảng chứa danh sách đối tượng nhân viên
var danhSachNhanVien = [];
function getEle(id){
	return document.getElementById(id);
}
function create(tag){
	return document.createElement(tag);
}
function themNhanVien(){
	var ho = getEle('ho').value;
	var ten = getEle('ten').value;
	var maNV = getEle('msnv').value;
	var ngayBatDau = getEle('datepicker').value;
	var chucVu = getEle('chucvu').value;
	//Khởi tạo một đối tượng mới (Instance)
	// từ lớp NhanVien;

	var NhanVienMoi = new NhanVien(ho,ten,maNV,ngayBatDau,chucVu);
	//push đối tượng nhân viên mới được tạo ra vào mảng
	danhSachNhanVien.push(NhanVienMoi);
	console.log(danhSachNhanVien);
	//Tạo bảng
	taoBang(danhSachNhanVien);
}
//Hàm tạo bảng danh sách nhân viên
function taoBang(mangDauVao){
	var tbodyNV = getEle('tbodyNhanVien');
	tbodyNV.innerHTML = '';
	for(var i = 0 ;i< mangDauVao.length;i++){
		var trTag = create('tr');
		//Set style cho thẻ tr
	
		//Gắn class cho thẻ thông qua js
		trTag.classList.add('tr-nv');
		//
		var tdSTT = create('td');
		var tdMaNV = create('td');
		var tdHoTen = create('td');
		var tdNgay = create('td');
		var tdChucVu = create('td');
		var tdLuong = create('td');
		var tdThaoTac = create('td');

		tdSTT.innerHTML = i + 1;
		tdMaNV.innerHTML = mangDauVao[i].MaNV;
		tdHoTen.innerHTML = mangDauVao[i].Ho + ' ' + mangDauVao[i].Ten;
		tdNgay.innerHTML = mangDauVao[i].NgayBatDau;
		tdChucVu.innerHTML = mangDauVao[i].ChucVu;
		tdLuong.innerHTML = mangDauVao[i].TinhLuong();
		tdThaoTac.innerHTML = '<button class="btn btn-info" id="btnXoa">Xóa</button>'

		trTag.appendChild(tdSTT);
		trTag.appendChild(tdMaNV);
		trTag.appendChild(tdHoTen);
		trTag.appendChild(tdNgay);
		trTag.appendChild(tdChucVu);
		trTag.appendChild(tdLuong);
		trTag.appendChild(tdThaoTac);

		tbodyNV.appendChild(trTag);

		
	}
}
var btnThemNhanVien = getEle('btnThemNV');
btnThemNhanVien.addEventListener('click',themNhanVien);

