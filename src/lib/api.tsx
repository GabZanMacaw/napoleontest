async function fetchAPI(query:any, { variables = {} } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getSeoForPage(url:string) {
  const data = await fetchAPI(
    `
    query Seos($where: JSON){
      seos(where: $where) {
        url
        Seo {
          metaTitle
          metaDescription
          shareImage{
            alt
            media {
              url
            }
          }
          keywords
          preventIndexing
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(url ? { url: url } : { url: "/" }),
        },
      },
    }
  );
  return data?.seos[0];
}

export async function getSettingsContent() {
  const data = fetchAPI(`
    {
      setting {
        email
        phone
        phonetwo
        address
        facebook
        instagram
        linkedin
      }
    }
  `);
  return data;
}

export async function getBannersContent() {
  const data = fetchAPI(`
    {
      banners {
        subtitle
        title
        text
        showbutton
        buttontext
        buttonlink
      }
    }
  `);
  return data;
}

export async function getAboutContent() {
  const data = fetchAPI(`
    {
      about {
        subtitleone
        titleone
        textone
        titletwo
        texttwo
        subtitlethree
        titlethree
        mission
        vision
        quality
      }
    }
  `);
  return data;
}

export async function getSegments() {
  const data = fetchAPI(`
    {
      segments(sort: "id:asc") {
        icon {
          url
        }
        background {
          url
        }
        name
        slug
      }
    }
  `);
  return data;
}

export async function getAllSegmentsWithSlug() {
  const data = fetchAPI(`
    {
      segments {
        slug
      }
    }
  `);
  return data;
}

export async function getSegment(slug:string) {
  const data = await fetchAPI(
    `
  query SegmentBySlug($where: JSON, $where_ne: JSON) {
    segments(where: $where) {
      icon {
        url
      }
      background {
        url
      }
      name
      slug
      products {
        title
        slug
        image {
          url
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage{
          alt
          media {
            url
          }
        }
        keywords
        preventIndexing
      }
    }
    moreSegments: segments(sort: "id:asc", where: $where_ne) {
      icon {
        url
      }
      background {
        url
      }
      name
      slug
      products {
        title
        slug
        image {
          url
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage{
          alt
          media {
            url
          }
        }
        keywords
        preventIndexing
      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
        where_ne: {
          slug_ne: slug,
        },
      },
    }
  );
  return data;
}

export async function getAllProductsWithSlug() {
  const data = fetchAPI(`
    {
      products {
        slug,
          segment {
          slug,
        }
      }
    }
  `);
  return data;
}

export async function getProduct(slug:string, segment:string) {
  const data = await fetchAPI(
    `
  query ProductBySlug($where: JSON, $where_ne: JSON) {
    products(where: $where) {
      title
      description
      extra
      slug
      image {
        url
      }
      seo {
        metaTitle
        metaDescription
        shareImage{
          alt
          media {
            url
          }
        }
        keywords
        preventIndexing
      }
      segment {
        name,
        slug,
        icon {
          url
        }
      }
    }
    moreProducts: products(sort: "id:asc", where: $where_ne) {
      title
      description
      extra
      slug
      image {
        url
      }
      seo {
        metaTitle
        metaDescription
        shareImage{
          alt
          media {
            url
          }
        }
        keywords
        preventIndexing
      }
      segment {
        slug
      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
        where_ne: {
          slug_ne: slug,
          segment: {slug: segment},
        },
      },
    }
  );
  return data;
}


export async function getDifferentialContent() {
  const data = fetchAPI(`
    {
      differentials(sort: "id:asc") {
        media {
          url
        }
        title
        text
      }
    }
  `);
  return data;
}

export async function getCatalogContent() {
  const data = fetchAPI(`
    {
      catalog {
        media {
          name
          url
        }
      }
    }
  `);
  return data;
}
