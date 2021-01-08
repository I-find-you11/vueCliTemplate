// 环境
export const isPro = process.env.NODE_ENV === 'production'

// 线上环境 版本
export const proType = 'dev'

// 开发环境地址，用来做代理使用
export const devPro = {
	https: false,
	url: '192.168.0.111:8091/'
}

// 打包地址
// 开发库地址，区分正式和测试
const apiPro = {
	pro: {
		https: false,
		url: '192.168.0.111:8091/'
	},
	test: {
		https: true,
		url: 'mini.getray.cn/'
	}
}

export const apiConfig = apiPro[proType]