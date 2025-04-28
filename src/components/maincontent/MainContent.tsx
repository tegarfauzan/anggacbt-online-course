import React, { useState, useEffect, useRef } from "react";
import { DropdownProps } from "../../types/type";

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button onClick={toggleDropdown} className="w-[120px] rounded-[50px] border border-[#EEEEEE] px-[16px] py-[10px] bg-white flex justify-between items-center">
        <span className="font-semibold text-[14px] text-[#0A090B]">{buttonLabel}</span>
        <img src="assets/images/icons/arrow-down.svg" alt="Arrow Down" className="w-[20px] h-[20px] shrink-0" />
      </button>
      <div
        className={`dropdown ${isActive ? "active" : ""} absolute left-0 mt-2 w-full bg-white shadow-[0px_10px_16px_0px_#0A090B0D] rounded-md py-2 z-10 text-left`}
        style={{
          maxHeight: isActive ? "500px" : "0",
          opacity: isActive ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <a href="#" className="block px-4 py-2 text-[14px] font-semibold text-[#0A090B]">
          Manage
        </a>
        <a href="#" className="block px-4 py-2 text-[14px] font-semibold text-[#0A090B]">
          Students
        </a>
        <a href="#" className="block px-4 py-2 text-[14px] font-semibold text-[#0A090B]">
          Edit Course
        </a>
        <a href="#" className="block px-4 py-2 text-[14px] font-semibold text-[#FD445E]">
          Delete
        </a>
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex-1 h-screen overflow-y-auto">
      {/* Navbar Top */}
      <section className="bg-transparent px-[20px] py-[20px] flex items-center gap-[266px] justify-between border-b border-[#EEEEEE]">
        {/* Form Input (Search) */}
        <form className="relative w-full max-w-[500px]">
          <input type="text" placeholder="Search by report, student, etc" className="w-full h-[52px] focus:outline-none focus:ring-2 focus:ring-[#6436F1] rounded-full border border-[#EEEEEE] bg-transparent hover:ring-2 hover:ring-[#6436F1] transition-all duration-300 placeholder:font-normal placeholder:text-[16px] placeholder:text-[#7F8190] font-semibold text-[#0A090B] px-[20px] pr-[60px]" />
          {/* Button icon search, absolute di atas input */}
          <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-[16px] w-[32px] h-[32px] flex items-center justify-center shrink-0">
            <img src="assets/images/icons/search.svg" alt="Search Icon" />
          </button>
        </form>
        {/* Bagian kanan navbar top */}
        <div className="flex items-center gap-[30px] shrink-0">
          {/* Icons */}
          <div className="icons flex items-center gap-[14px]">
            {/* Icon 1 (receipt) */}
            <a href="#" className="shrink-0">
              <div className="border border-[#EEEEEE] w-[46px] h-[46px] rounded-full flex items-center justify-center bg-transparent hover:ring-2 ring-[#6436F1] transition-all duration-300">
                <img src="assets/images/icons/receipt.svg" alt="Receipt Icon" className="w-[20px] h-[20px] shrink-0" />
              </div>
            </a>
            {/* Icon 2 (notification) */}
            <a href="#" className="shrink-0">
              <div className="border border-[#EEEEEE] w-[46px] h-[46px] rounded-full flex items-center justify-center bg-transparent hover:ring-2 ring-[#6436F1] transition-all duration-300">
                <img src="assets/images/icons/notification.svg" alt="Notification Icon" className="w-[20px] h-[20px] shrink-0" />
              </div>
            </a>
          </div>
          {/* Line pembatas */}
          <div className="line w-[1px] h-[46px] bg-[#EEEEEE]" />
          {/* Profile */}
          <div className="profile flex items-center gap-[12px]">
            {/* Nama */}
            <div className="name flex flex-col">
              <p className="font-normal text-[14px] text-[#7F8190] text-right">Howdy</p>
              <h6 className="font-semibold text-[16px] text-[#0A090B] text-right">Fany Alqo</h6>
            </div>
            {/* Profile Image */}
            <div className="profile-image flex justify-center items-center w-[46px] h-[46px] shrink-0 overflow-hidden rounded-full">
              <img src="assets/images/profiles/profile-default.png" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      {/* Section Content (ruang sisa untuk konten utama) */}
      <section className="content px-[20px] pt-[20px] pr-[20px] pb-[30px] flex flex-col gap-[30px]">
        {/* Header di atas tabel */}
        <header className="w-full flex items-center">
          {/* Title Page (posisi paling kiri) */}
          <div className="title-page flex flex-col gap-[4px]">
            <h1 className="font-extrabold text-[30px] text-[#0A090B]">Manage Course</h1>
            <p className="font-normal text-[16px] text-[#7F8190]">Provide high quality for best students</p>
          </div>
          {/* Jarak otomatis agar tombol link di sisi kanan */}
          <div className="flex-1" />
          {/* Tombol Link (posisi paling kanan) */}
          <a href="#" className="inline-block px-[20px] py-[14px] bg-[#6436F1] rounded-full font-bold text-[16px] text-white hover:shadow-[0_4px_15px_0_#6436F14D] transition-all duration-300 shrink-0">
            {" "}
            Add New Course{" "}
          </a>
        </header>
        {/* Tabel (menggunakan struktur flex agar full width) */}
        <div className="tabel w-full">
          {/* Kepala Tabel */}
          <div className="flex gap-[63.33px] pb-[16px] border-b border-[#EEEEEE]">
            {/* Kolom Course */}
            <div className="flex-1 min-w-[300px] text-[#7F8190]">Course</div>
            {/* Kolom Date Created */}
            <div className="flex-1 min-w-[150px] text-center text-[#7F8190]">Date Created</div>
            {/* Kolom Category */}
            <div className="flex-1 min-w-[170px] text-center text-[#7F8190]">Category</div>
            {/* Kolom Action */}
            <div className="flex-1 min-w-[120px] text-center text-[#7F8190]">Action</div>
          </div>
          {/* Badan Tabel */}
          <div className="mt-[30px] flex flex-col gap-[30px]">
            {/* Contoh Baris Tabel (ulangi hingga 5 baris) */}
            <div className="flex gap-[63.33px] items-center">
              {/* Kolom Course */}
              <div className="flex-1 min-w-[300px] flex items-center gap-[16px]">
                <img src="assets/images/thumbnails/course-1.png" alt="Course Thumbnail" className="w-[64px] h-[64px] shrink-0 object-cover" />
                <div className="course-text flex flex-col gap-[2px] text-left">
                  <span className="font-bold text-[18px] text-[#0A090B]">Design Interview</span>
                  <span className="font-normal text-[16px] text-[#7F8190]">Beginners</span>
                </div>
              </div>
              {/* Kolom Date Created */}
              <div className="flex-1 min-w-[150px] text-center font-semibold text-[16px] text-[#0A090B]">22 August 2024</div>
              {/* Kolom Category */}
              <div className="flex-1 min-w-[170px] text-center">
                <span className="inline-block bg-[#FFF2E6] text-[#F6770B] font-bold text-[14px] rounded-full px-[16px] py-[8px]"> Product Design </span>
              </div>
              {/* Kolom Action */}
              <div className="flex-1 min-w-[120px] text-center">
                {/* Dropdown (simulasi) */}
                <Dropdown index={0} buttonLabel="Menu" />
              </div>
            </div>
            {/* Ulangi baris berikut untuk membuat total 5 baris */}
            <div className="flex gap-[63.33px] items-center">
              <div className="flex-1 min-w-[300px] flex items-center gap-[16px]">
                <img src="assets/images/thumbnails/course-2.png" alt="Course Thumbnail" className="w-[64px] h-[64px] shrink-0 object-cover" />
                <div className="course-text flex flex-col gap-[2px] text-left">
                  <span className="font-bold text-[18px] text-[#0A090B]">Intro to Full-Stack</span>
                  <span className="font-normal text-[16px] text-[#7F8190]">Beginners</span>
                </div>
              </div>
              <div className="flex-1 min-w-[150px] text-center font-semibold text-[16px] text-[#0A090B]">11 March 2024</div>
              <div className="flex-1 min-w-[170px] text-center">
                <span className="inline-block bg-[#EAE8FE] text-[#6436F1] font-bold text-[14px] rounded-full px-[16px] py-[8px]"> Programming </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center">
                <Dropdown index={1} buttonLabel="Menu" />
              </div>
            </div>
            {/* Baris 3 */}
            <div className="flex gap-[63.33px] items-center">
              <div className="flex-1 min-w-[300px] flex items-center gap-[16px]">
                <img src="assets/images/thumbnails/course-3.png" alt="Course Thumbnail" className="w-[64px] h-[64px] shrink-0 object-cover" />
                <div className="course-text flex flex-col gap-[2px] text-left">
                  <span className="font-bold text-[18px] text-[#0A090B]">Digital Marketing 101</span>
                  <span className="font-normal text-[16px] text-[#7F8190]">Beginners</span>
                </div>
              </div>
              <div className="flex-1 min-w-[150px] text-center font-semibold text-[16px] text-[#0A090B]">11 March 2024</div>
              <div className="flex-1 min-w-[170px] text-center">
                <span className="inline-block bg-[#D5EFFE] text-[#066DFE] font-bold text-[14px] rounded-full px-[16px] py-[8px]"> Marketing </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center">
                <Dropdown index={2} buttonLabel="Menu" />
              </div>
            </div>
            {/* Baris 4 */}
            <div className="flex gap-[63.33px] items-center">
              <div className="flex-1 min-w-[300px] flex items-center gap-[16px]">
                <img src="assets/images/thumbnails/course-4.png" alt="Course Thumbnail" className="w-[64px] h-[64px] shrink-0 object-cover" />
                <div className="course-text flex flex-col gap-[2px] text-left">
                  <span className="font-bold text-[18px] text-[#0A090B]">Usability-Testing</span>
                  <span className="font-normal text-[16px] text-[#7F8190]">Beginners</span>
                </div>
              </div>
              <div className="flex-1 min-w-[150px] text-center font-semibold text-[16px] text-[#0A090B]">30 June 2024</div>
              <div className="flex-1 min-w-[170px] text-center">
                <span className="inline-block bg-[#FFF2E6] text-[#F6770B] font-bold text-[14px] rounded-full px-[16px] py-[8px]"> Product Design </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center">
                <Dropdown index={3} buttonLabel="Menu" />
              </div>
            </div>
            {/* Baris 5 */}
            <div className="flex gap-[63.33px] items-center">
              <div className="flex-1 min-w-[300px] flex items-center gap-[16px]">
                <img src="assets/images/thumbnails/course-5.png" alt="Course Thumbnail" className="w-[64px] h-[64px] shrink-0 object-cover" />
                <div className="course-text flex flex-col gap-[2px] text-left">
                  <span className="font-bold text-[18px] text-[#0A090B]">Web Development</span>
                  <span className="font-normal text-[16px] text-[#7F8190]">Beginners</span>
                </div>
              </div>
              <div className="flex-1 min-w-[150px] text-center font-semibold text-[16px] text-[#0A090B]">30 June 2024</div>
              <div className="flex-1 min-w-[170px] text-center">
                <span className="inline-block bg-[#EAE8FE] text-[#6436F1] font-bold text-[14px] rounded-full px-[16px] py-[8px]"> Programming </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center">
                <Dropdown index={4} buttonLabel="Menu" />
              </div>
            </div>
          </div>
        </div>
        {/* Sibling div "pagination" */}
        <div className="pagination mt-[37px] flex gap-[16px]">
          <button className="w-[40px] h-[40px] shrink-0 rounded-full flex justify-center items-center border border-[#EEEEEE] text-[16px] font-semibold text-[#7F8190] transition-all duration-300 hover:bg-[#0A090B] hover:text-[#FFFFFF]">1</button>
          <button className="w-[40px] h-[40px] shrink-0 rounded-full flex justify-center items-center border border-[#EEEEEE] text-[16px] font-semibold text-[#7F8190] transition-all duration-300 hover:bg-[#0A090B] hover:text-[#FFFFFF]">2</button>
          <button className="w-[40px] h-[40px] shrink-0 rounded-full flex justify-center items-center border border-[#EEEEEE] text-[16px] font-semibold text-[#7F8190] transition-all duration-300 hover:bg-[#0A090B] hover:text-[#FFFFFF]">3</button>
          <button className="w-[40px] h-[40px] shrink-0 rounded-full flex justify-center items-center border border-[#EEEEEE] text-[16px] font-semibold text-[#7F8190] transition-all duration-300 hover:bg-[#0A090B] hover:text-[#FFFFFF]">4</button>
          <button className="w-[40px] h-[40px] shrink-0 rounded-full flex justify-center items-center border border-[#EEEEEE] text-[16px] font-semibold text-[#7F8190] transition-all duration-300 hover:bg-[#0A090B] hover:text-[#FFFFFF]">5</button>
        </div>
      </section>
    </main>
  );
}
