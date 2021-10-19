from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://kr.leagueoflegends.com/ko-kr/')
# naver 페이지 열기
loginBtn = driver.find_element_by_xpath(
    '//*[@id="riotbar-right-content"]/div[3]/div[1]/a')
loginBtn.click()
