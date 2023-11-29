import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col xl:flex-row items-center justify-center h-screen text-sm">
        <section>
          <h1 className="flex justify-center">
            <Link to={"/"}>
              <svg
                width="184"
                height="48"
                viewBox="0 0 184 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.47363"
                  y="24.2632"
                  width="6.05263"
                  height="7.26315"
                  rx="1"
                  fill="#344256"
                />
                <rect
                  x="8.47363"
                  y="17"
                  width="6.05263"
                  height="6.05263"
                  rx="3.02631"
                  fill="#344256"
                />
                <rect
                  x="16.9475"
                  y="24.2632"
                  width="6.05263"
                  height="7.26315"
                  rx="1"
                  fill="#344256"
                />
                <rect
                  x="16.9475"
                  y="17"
                  width="6.05263"
                  height="6.05263"
                  rx="3.02631"
                  fill="#344256"
                />
                <rect
                  y="24.2632"
                  width="6.05263"
                  height="7.26315"
                  rx="1"
                  fill="#344256"
                />
                <rect
                  y="17"
                  width="6.05263"
                  height="6.05263"
                  rx="3.02631"
                  fill="#344256"
                />
                <path
                  d="M51.672 35H48.024L37.048 18.392V35H33.4V12.728H37.048L48.024 29.304V12.728H51.672V35ZM72.6225 25.752C72.6225 26.4133 72.5798 27.0107 72.4945 27.544H59.0225C59.1292 28.952 59.6518 30.0827 60.5905 30.936C61.5292 31.7893 62.6812 32.216 64.0465 32.216C66.0092 32.216 67.3958 31.3947 68.2065 29.752H72.1425C71.6092 31.3733 70.6385 32.7067 69.2305 33.752C67.8438 34.776 66.1158 35.288 64.0465 35.288C62.3612 35.288 60.8465 34.9147 59.5025 34.168C58.1798 33.4 57.1345 32.3333 56.3665 30.968C55.6198 29.5813 55.2465 27.9813 55.2465 26.168C55.2465 24.3547 55.6092 22.7653 56.3345 21.4C57.0812 20.0133 58.1158 18.9467 59.4385 18.2C60.7825 17.4533 62.3185 17.08 64.0465 17.08C65.7105 17.08 67.1932 17.4427 68.4945 18.168C69.7958 18.8933 70.8092 19.9173 71.5345 21.24C72.2598 22.5413 72.6225 24.0453 72.6225 25.752ZM68.8145 24.6C68.7932 23.256 68.3132 22.1787 67.3745 21.368C66.4358 20.5573 65.2732 20.152 63.8865 20.152C62.6278 20.152 61.5505 20.5573 60.6545 21.368C59.7585 22.1573 59.2252 23.2347 59.0545 24.6H68.8145ZM80.4685 20.344V30.104C80.4685 30.7653 80.6178 31.2453 80.9165 31.544C81.2365 31.8213 81.7698 31.96 82.5165 31.96H84.7565V35H81.8765C80.2338 35 78.9752 34.616 78.1005 33.848C77.2258 33.08 76.7885 31.832 76.7885 30.104V20.344H74.7085V17.368H76.7885V12.984H80.4685V17.368H84.7565V20.344H80.4685ZM95.4468 35.224C93.9534 35.224 92.6094 34.968 91.4148 34.456C90.2201 33.9227 89.2814 33.176 88.5988 32.216C87.9161 31.256 87.5748 30.136 87.5748 28.856H91.4788C91.5641 29.816 91.9374 30.6053 92.5988 31.224C93.2814 31.8427 94.2308 32.152 95.4468 32.152C96.7054 32.152 97.6868 31.8533 98.3908 31.256C99.0948 30.6373 99.4468 29.848 99.4468 28.888C99.4468 28.1413 99.2228 27.5333 98.7748 27.064C98.3481 26.5947 97.8041 26.232 97.1428 25.976C96.5028 25.72 95.6068 25.4427 94.4548 25.144C93.0041 24.76 91.8201 24.376 90.9028 23.992C90.0068 23.5867 89.2388 22.968 88.5988 22.136C87.9588 21.304 87.6388 20.1947 87.6388 18.808C87.6388 17.528 87.9588 16.408 88.5988 15.448C89.2388 14.488 90.1348 13.752 91.2868 13.24C92.4388 12.728 93.7721 12.472 95.2868 12.472C97.4414 12.472 99.2014 13.016 100.567 14.104C101.953 15.1707 102.721 16.6427 102.871 18.52H98.8388C98.7748 17.7093 98.3908 17.016 97.6868 16.44C96.9828 15.864 96.0548 15.576 94.9028 15.576C93.8574 15.576 93.0041 15.8427 92.3428 16.376C91.6814 16.9093 91.3508 17.6773 91.3508 18.68C91.3508 19.3627 91.5534 19.928 91.9588 20.376C92.3854 20.8027 92.9188 21.144 93.5588 21.4C94.1988 21.656 95.0734 21.9333 96.1828 22.232C97.6548 22.6373 98.8494 23.0427 99.7668 23.448C100.705 23.8533 101.495 24.4827 102.135 25.336C102.796 26.168 103.127 27.288 103.127 28.696C103.127 29.8267 102.817 30.8933 102.199 31.896C101.601 32.8987 100.716 33.7093 99.5428 34.328C98.3908 34.9253 97.0254 35.224 95.4468 35.224ZM115.079 35.288C113.415 35.288 111.911 34.9147 110.567 34.168C109.223 33.4 108.167 32.3333 107.399 30.968C106.631 29.5813 106.247 27.9813 106.247 26.168C106.247 24.376 106.642 22.7867 107.431 21.4C108.221 20.0133 109.298 18.9467 110.663 18.2C112.029 17.4533 113.554 17.08 115.239 17.08C116.925 17.08 118.45 17.4533 119.815 18.2C121.181 18.9467 122.258 20.0133 123.047 21.4C123.837 22.7867 124.231 24.376 124.231 26.168C124.231 27.96 123.826 29.5493 123.015 30.936C122.205 32.3227 121.095 33.4 119.687 34.168C118.301 34.9147 116.765 35.288 115.079 35.288ZM115.079 32.12C116.018 32.12 116.893 31.896 117.703 31.448C118.535 31 119.207 30.328 119.719 29.432C120.231 28.536 120.487 27.448 120.487 26.168C120.487 24.888 120.242 23.8107 119.751 22.936C119.261 22.04 118.61 21.368 117.799 20.92C116.989 20.472 116.114 20.248 115.175 20.248C114.237 20.248 113.362 20.472 112.551 20.92C111.762 21.368 111.133 22.04 110.663 22.936C110.194 23.8107 109.959 24.888 109.959 26.168C109.959 28.0667 110.439 29.5387 111.399 30.584C112.381 31.608 113.607 32.12 115.079 32.12ZM126.622 26.168C126.622 24.3547 126.984 22.7653 127.71 21.4C128.456 20.0133 129.48 18.9467 130.782 18.2C132.083 17.4533 133.576 17.08 135.262 17.08C137.395 17.08 139.155 17.592 140.542 18.616C141.95 19.6187 142.899 21.0587 143.39 22.936H139.454C139.134 22.0613 138.622 21.3787 137.918 20.888C137.214 20.3973 136.328 20.152 135.262 20.152C133.768 20.152 132.574 20.6853 131.678 21.752C130.803 22.7973 130.366 24.2693 130.366 26.168C130.366 28.0667 130.803 29.5493 131.678 30.616C132.574 31.6827 133.768 32.216 135.262 32.216C137.374 32.216 138.771 31.288 139.454 29.432H143.39C142.878 31.224 141.918 32.6533 140.51 33.72C139.102 34.7653 137.352 35.288 135.262 35.288C133.576 35.288 132.083 34.9147 130.782 34.168C129.48 33.4 128.456 32.3333 127.71 30.968C126.984 29.5813 126.622 27.9813 126.622 26.168ZM148.881 15.032C148.22 15.032 147.665 14.808 147.217 14.36C146.769 13.912 146.545 13.3573 146.545 12.696C146.545 12.0347 146.769 11.48 147.217 11.032C147.665 10.584 148.22 10.36 148.881 10.36C149.521 10.36 150.065 10.584 150.513 11.032C150.961 11.48 151.185 12.0347 151.185 12.696C151.185 13.3573 150.961 13.912 150.513 14.36C150.065 14.808 149.521 15.032 148.881 15.032ZM150.673 17.368V35H147.025V17.368H150.673ZM154.247 26.104C154.247 24.3333 154.609 22.7653 155.335 21.4C156.081 20.0347 157.084 18.9787 158.343 18.232C159.623 17.464 161.031 17.08 162.567 17.08C163.953 17.08 165.159 17.3573 166.183 17.912C167.228 18.4453 168.06 19.1173 168.679 19.928V17.368H172.359V35H168.679V32.376C168.06 33.208 167.217 33.9013 166.151 34.456C165.084 35.0107 163.868 35.288 162.503 35.288C160.988 35.288 159.601 34.904 158.343 34.136C157.084 33.3467 156.081 32.2587 155.335 30.872C154.609 29.464 154.247 27.8747 154.247 26.104ZM168.679 26.168C168.679 24.952 168.423 23.896 167.911 23C167.42 22.104 166.769 21.4213 165.959 20.952C165.148 20.4827 164.273 20.248 163.335 20.248C162.396 20.248 161.521 20.4827 160.711 20.952C159.9 21.4 159.239 22.072 158.727 22.968C158.236 23.8427 157.991 24.888 157.991 26.104C157.991 27.32 158.236 28.3867 158.727 29.304C159.239 30.2213 159.9 30.9253 160.711 31.416C161.543 31.8853 162.417 32.12 163.335 32.12C164.273 32.12 165.148 31.8853 165.959 31.416C166.769 30.9467 167.42 30.264 167.911 29.368C168.423 28.4507 168.679 27.384 168.679 26.168ZM180.798 11.32V35H177.15V11.32H180.798Z"
                  fill="#344256"
                />
              </svg>
            </Link>
          </h1>
          <h2 className="text-center my-8 text-base font-medium">Sign in</h2>
          <div className="p-8 rounded-xl border-2 border-[#cbd5e1] shadow-lg">
            <div>
              <label className="block">User name</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="mt-6">
              <label className="block">Password</label>
              <input className="rounded h-10 border-[#cbd5e1] border-2 mt-1" />
            </div>
            <div className="rounded-xl border-2 text-center border-[#cbd5e1] p-2 my-6">
              <Link to={"/"} className="uppercase font-bold">
                Login
              </Link>
            </div>
            <div className="rounded-xl border-2 text-center p-2 border-[#FA8072]">
              <Link to={"create-user-page"}>
                <strong className="uppercase font-bold">Or</strong> create user
              </Link>
            </div>
          </div>
          <div className="m-8 text-center">
            <span>Dark mode</span>
            <span>
              {/*Use conditional statment if light mode/then a moon symbol else if dark mode/then a sun symbol*/}
            </span>
          </div>
        </section>
        <section>
          <img />
        </section>
      </main>
    </>
  );
}
