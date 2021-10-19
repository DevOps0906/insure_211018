# AIA 생명 치과보험사이트에 정보 입력(내정보) 보험료 / 보장 내역 출력하기;
# https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html
from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get(
    'https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html')

maleBtn = driver.find_element_by_xpath(
    '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[2]')
maleBtn.click()

birthInput = driver.find_element_by_xpath('//*[@id="aia644363719"]')
birthInput.send_keys("19890119")

searchBtn = driver.find_element_by_xpath('//*[@id="btn806817556"]')
searchBtn.click()
# naver 페이지 열기
driver.implicitly_wait(3)

priceText = driver.find_element_by_xpath(
    '//*[@id="premium-by-timespan-value"]').text
print(priceText)

resultTable = driver.find_element_by_xpath(
    '//*[@id="collapse-large--77993452"]/div[2]/table/tbody')
rows = resultTable.find_elements_by_tag_name('tr')
tableBody = driver.find_element_by_xpath(
    '//*[@id="collapse-large-724022276"]/div[1]/div/table').find_element_by_tag_name('tbody')
driver.find_element_by_xpath(
    '//*[@id="the_fine_print"]/div[2]/div[1]/div[2]/div/a[2]').click()
rows = tableBody.find_elements_by_tag_name("tr")
contentsList = []
for index, value in enumerate(rows):
    if index != 0:
        print(value.find_elements_by_tag_name('td')[0].text)
