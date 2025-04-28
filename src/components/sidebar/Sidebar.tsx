export default function Sidebar() {
  return (
    <aside className="w-[270px] h-screen bg-[#FBFBFB] px-[30px] py-[30px] border-r border-[#EEEEEE] flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden">
      {/* Bagian Navbar (Logo, Daily Use, Others) */}
      <div className="flex flex-col gap-[30px]">
        {/* Logo Company */}
        <a href="">
          <div className="flex items-center gap-[12px]">
            {/* Icon Logo Company */}
            <img src="assets/images/company/company.svg" alt="Company Logo" className="w-[36px] h-[36px] shrink-0" />
            {/* Teks Logo */}
            <span className="font-extrabold text-[20px] text-[#0A090B]"> AnggaCBT </span>
          </div>
        </a>
        {/* DAILY USE */}
        <div className="flex flex-col gap-[12px]">
          {/* Judul Daily Use */}
          <span className="font-bold text-[12px] text-[#A5ABB2]">DAILY USE</span>
          {/* Kumpulan Navigasi Daily Use */}
          <nav className="flex flex-col gap-[12px]">
            {/* Overview */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/overview-non-active.svg" alt="Overview Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/overview-active.svg" alt="Overview Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Overview
            </a>
            {/* Courses */}
            <a href="#" className="active group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/courses-non-active.svg" alt="Courses Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/courses-active.svg" alt="Courses Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Courses
            </a>
            {/* Students */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/students-non-active.svg" alt="Students Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/students-active.svg" alt="Students Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Students
            </a>
            {/* Messages (dengan alert) */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/messages-non-active.svg" alt="Messages Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/messages-active.svg" alt="Messages Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Messages
              {/* Alert Badge */}
              <span className="bg-[#F6770B] rounded-full w-[20px] h-[20px] flex items-center justify-center text-white font-bold text-[10px] shrink-0"> 12 </span>
            </a>
            {/* Analytics */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/analytics-non-active.svg" alt="Analytics Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/analytics-active.svg" alt="Analytics Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Analytics
            </a>
          </nav>
        </div>
        {/* OTHERS */}
        <div className="flex flex-col gap-[12px]">
          {/* Judul Others */}
          <span className="font-bold text-[12px] text-[#A5ABB2]">OTHERS</span>
          {/* Kumpulan Navigasi Others */}
          <nav className="flex flex-col gap-[12px]">
            {/* Rewards */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/rewards-non-active.svg" alt="Rewards Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/rewards-active.svg" alt="Rewards Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Rewards
            </a>
            {/* A.I Plugins */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/ai-plugins-non-active.svg" alt="AI Plugins Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/ai-plugins-active.svg" alt="AI Plugins Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              A.I Plugins
            </a>
            {/* Settings */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/settings-non-active.svg" alt="Settings Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/settings-active.svg" alt="Settings Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Settings
            </a>
            {/* Logout */}
            <a href="#" className="group px-[16px] py-[10px] rounded-full flex items-center gap-[14px] text-[#0A090B] font-semibold hover:bg-[#2B82FE] hover:text-white transition-all duration-300 [&.active]:bg-[#2B82FE] [&.active]:text-white">
              <img src="assets/images/icons/logout-non-active.svg" alt="Logout Icon" className="group-hover:hidden w-[24px] h-[24px] shrink-0 group-[&.active]:hidden" />
              <img src="assets/images/icons/logout-active.svg" alt="Logout Icon" className="hidden group-hover:block w-[24px] h-[24px] shrink-0 group-[&.active]:block" />
              Logout
            </a>
          </nav>
        </div>
      </div>
      {/* Bagian Get Pro */}
      <a href="">
        <div className="w-full bg-[#0A090B] rounded-[14px] px-[16px] py-[16px] flex items-center gap-[12px]">
          {/* Icon Get Pro */}
          <img src="assets/images/icons/get-pro.svg" alt="Get Pro Icon" className="w-[50px] h-[50px] shrink-0" />
          {/* Teks Get Pro */}
          <div className="flex flex-col gap-[2px]">
            <span className="font-semibold text-white">Get Pro</span>
            <p className="font-normal text-[14px] text-[#A0A0A0]">Unlock features</p>
          </div>
        </div>
      </a>
    </aside>
  );
}
