function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-16 sm:w-20 hover:text-white">
      <Icon className="h-8 w-8 mb-1 group-hover:animate-bounce" />
      <span className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
}

export default HeaderItem;
