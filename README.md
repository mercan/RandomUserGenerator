# Random User Generator

Rastgele kullanıcı verileri için ücretsiz API

## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/mercan/RandomUserGenerator.git
```

Proje dizinine gidin

```bash
  cd RandomUserGenerator
```

Dockerfile build alın

```docker
    docker build -t RandomUserGenerator .
```

Dockerfile'ı çalıştırın (.env dosyasını yapılandırmayı unutmayınız)

```docker
    docker run --env-file ./.env -p 3000:3000 RandomUserGenerator
```

## Ortam Değişkenleri

Bu projeyi çalıştırmak için aşağıdaki ortam değişkenlerini .env dosyanıza eklemeniz gerekecek

`MONGODB_URI`

`PORT` varsayılan 3000 portunu kullanır

## API Kullanımı

#### Detaylı kullanıcı getir

```http
  GET /api/
```

| Parametre |   Tip    |                               Açıklama                               |
| :-------: | :------: | :------------------------------------------------------------------: |
| `gender`  | `string` |              Oluşturulacak kişinin cinsiyetini belirler              |
| `country` | `string` | Oluşturalacak **location** bilgilerini istediğiniz ülkeye göre seçer |

#### Sadece adres getir

```http
  GET /api/address/
```

#### Sadece kredi kartı getir

```http
  GET /api/credit_card/
```

#### Sadece bitcoin ve ethereum adresi getir

```http
  GET /api/blockchain_address/
```

## Testler

Testleri çalıştırmak için aşağıdaki komutu çalıştırın

```bash
  npm run test
```

## Ekler

Swagger Heroku Dökümantasyon: [Swagger](https://randomusergeneratorr.herokuapp.com/documentation)\
Swagger Localhost Dökümantasyon: [Swagger](http://localhost:3000/documentation)

## Kullanılan Teknolojiler

**Sunucu:** Node, Fastify, MongoDB, Swagger, Docker
