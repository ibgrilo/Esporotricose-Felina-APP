import React from "react";
import Svg, { Path } from "react-native-svg";

const HowToDeal = (props) => (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path d="M59.0689 45.4187C56.8002 44.1617 55.1225 42.0564 54.4037 39.5644C53.4975 36.4455 51.6034 33.705 49.0061 31.7548C46.4089 29.8047 43.2488 28.7502 40.0009 28.75C36.753 28.7498 33.5928 29.8038 30.9953 31.7536C28.3977 33.7034 26.5033 36.4436 25.5966 39.5624C24.8782 42.0552 23.2003 44.1613 20.9311 45.4187C17.8319 47.1056 15.4997 49.9191 14.4169 53.2773C13.334 56.6355 13.5834 60.2815 15.1134 63.461C16.6434 66.6405 19.337 69.1102 22.637 70.3594C25.9369 71.6085 29.5908 71.5415 32.8427 70.1721C37.4276 68.2846 42.5724 68.2846 47.1573 70.1721C50.4094 71.5427 54.0639 71.6105 57.3646 70.3616C60.6653 69.1126 63.3596 66.6426 64.8899 63.4625C66.4201 60.2825 66.6693 56.6358 65.5858 53.2772C64.5023 49.9185 62.1691 47.105 59.0689 45.4187ZM52.5 63.75C51.6625 63.752 50.8333 63.5845 50.0623 63.2576C50.0485 63.2517 50.0345 63.2459 50.0205 63.2401C43.6029 60.5905 36.3971 60.5905 29.9796 63.2401C29.9655 63.2459 29.9515 63.2517 29.9377 63.2576C28.4583 63.8834 26.7948 63.9157 25.2921 63.3479C23.7895 62.7801 22.563 61.6557 21.8672 60.2079C21.1713 58.7601 21.0593 57.1001 21.5546 55.572C22.0498 54.0438 23.1142 52.765 24.527 52.0006C24.538 51.9945 24.5493 51.9884 24.5602 51.9821C26.5446 50.8863 28.2936 49.4103 29.7073 47.6383C31.1209 45.8663 32.1715 43.833 32.7991 41.6548C33.2526 40.0957 34.1999 38.7259 35.4986 37.7513C36.7973 36.7767 38.3772 36.2499 40.001 36.25C41.6247 36.2502 43.2045 36.7773 44.503 37.7522C45.8015 38.727 46.7486 40.097 47.2018 41.6562C47.8293 43.8341 48.8798 45.8671 50.2933 47.6389C51.7068 49.4107 53.4556 50.8865 55.4398 51.9821C55.4507 51.9884 55.462 51.9945 55.473 52.0006C56.6964 52.6623 57.6641 53.7132 58.223 54.9867C58.7819 56.2603 58.9002 57.684 58.559 59.0323C58.2178 60.3806 57.4367 61.5767 56.3393 62.4312C55.2419 63.2857 53.8908 63.7498 52.5 63.75ZM72.5 32.5C72.5 33.9834 72.0601 35.4334 71.236 36.6668C70.4119 37.9002 69.2406 38.8614 67.8701 39.4291C66.4997 39.9968 64.9917 40.1453 63.5368 39.8559C62.082 39.5665 60.7456 38.8522 59.6967 37.8033C58.6478 36.7544 57.9335 35.418 57.6441 33.9632C57.3547 32.5083 57.5033 31.0003 58.0709 29.6299C58.6386 28.2594 59.5999 27.0881 60.8332 26.264C62.0666 25.4399 63.5166 25 65 25C65.9849 25 66.9602 25.194 67.8701 25.5709C68.7801 25.9478 69.6069 26.5003 70.3033 27.1967C70.9998 27.8931 71.5522 28.7199 71.9291 29.6299C72.306 30.5398 72.5 31.5151 72.5 32.5ZM15 40C13.5166 40 12.0666 39.5601 10.8332 38.736C9.59986 37.9119 8.63856 36.7406 8.07091 35.3701C7.50325 33.9997 7.35472 32.4917 7.64411 31.0368C7.9335 29.582 8.64781 28.2456 9.6967 27.1967C10.7456 26.1478 12.082 25.4335 13.5368 25.1441C14.9917 24.8547 16.4997 25.0032 17.8701 25.5709C19.2406 26.1386 20.4119 27.0999 21.236 28.3332C22.0601 29.5666 22.5 31.0166 22.5 32.5C22.5 33.4849 22.306 34.4602 21.9291 35.3701C21.5522 36.2801 20.9998 37.1069 20.3033 37.8033C19.6069 38.4998 18.7801 39.0522 17.8701 39.4291C16.9602 39.806 15.9849 40 15 40ZM22.5 17.5C22.5 16.0166 22.9399 14.5666 23.764 13.3332C24.5881 12.0999 25.7594 11.1386 27.1299 10.5709C28.5003 10.0032 30.0083 9.85472 31.4632 10.1441C32.918 10.4335 34.2544 11.1478 35.3033 12.1967C36.3522 13.2456 37.0665 14.582 37.3559 16.0368C37.6453 17.4917 37.4968 18.9997 36.9291 20.3701C36.3614 21.7406 35.4001 22.9119 34.1668 23.736C32.9334 24.5601 31.4834 25 30 25C29.0151 25 28.0398 24.806 27.1299 24.4291C26.2199 24.0522 25.3931 23.4998 24.6967 22.8033C24.0003 22.1069 23.4478 21.2801 23.0709 20.3701C22.694 19.4602 22.5 18.4849 22.5 17.5ZM42.5 17.5C42.5 16.0166 42.9399 14.5666 43.764 13.3332C44.5881 12.0999 45.7594 11.1386 47.1299 10.5709C48.5003 10.0032 50.0083 9.85472 51.4632 10.1441C52.918 10.4335 54.2544 11.1478 55.3033 12.1967C56.3522 13.2456 57.0665 14.582 57.3559 16.0368C57.6453 17.4917 57.4968 18.9997 56.9291 20.3701C56.3614 21.7406 55.4001 22.9119 54.1668 23.736C52.9334 24.5601 51.4834 25 50 25C49.0151 25 48.0398 24.806 47.1299 24.4291C46.2199 24.0522 45.3931 23.4998 44.6967 22.8033C44.0003 22.1069 43.4478 21.2801 43.0709 20.3701C42.694 19.4602 42.5 18.4849 42.5 17.5Z" fill="#375CA6" />
    </Svg>
)

export default HowToDeal;