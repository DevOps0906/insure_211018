from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.eum.go.kr/web/am/amMain.jsp;')
# naver 페이지 열기

sidoSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
sidoSelect.select_by_visible_text("전라남도")

# work1 전라남도 고흥군 고흥읍 남계리 45 - 1 번지의 데이터를 스크래핑하기 / 공시지가 가져오기
# driver.implicitly_wait(1)// 함정을 피할수 있는 방법 1 = 1초동안 대기한다
